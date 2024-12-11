import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeMisinformation(content: string) {
  const prompt = `
    Analyze the following content for potential misinformation. Consider:
    - Factual accuracy
    - Source credibility
    - Common misinformation patterns
    - Logical consistency
    
    Content to analyze:
    "${content}"
    
    Provide a detailed analysis including:
    1. Whether it's likely misinformation
    2. Confidence level (0-100)
    3. Explanation of the analysis
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert fact-checker and misinformation analyst. Provide clear, detailed analysis of content for potential misinformation."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const analysis = response.choices[0].message.content;
    return parseAnalysis(analysis);
  } catch (error) {
    console.error('Error analyzing content:', error);
    throw new Error('Failed to analyze content');
  }
}

function parseAnalysis(analysis: string): {
  isMisinformation: boolean;
  confidence: number;
  explanation: string;
} {
  // This is a simple parser - you might want to make it more robust
  const lines = analysis.split('\n');
  const isMisinformation = analysis.toLowerCase().includes('misinformation');
  const confidenceMatch = analysis.match(/confidence.*?(\d+)/i);
  const confidence = confidenceMatch ? parseInt(confidenceMatch[1]) : 50;
  const explanation = lines.slice(2).join('\n').trim();

  return {
    isMisinformation,
    confidence,
    explanation
  };
}