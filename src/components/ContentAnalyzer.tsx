import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { analyzeMisinformation } from '../services/openai';

export function ContentAnalyzer() {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    isMisinformation: boolean;
    confidence: number;
    explanation: string;
  }>(null);

  const analyzeContent = async () => {
    setIsAnalyzing(true);
    try {
      const analysis = await analyzeMisinformation(content);
      setResult(analysis);
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Analyze Content</h2>
        <textarea
          className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Paste news article, social media post, or any content to analyze..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={analyzeContent}
          disabled={!content || isAnalyzing}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center w-full md:w-auto"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="mr-2" />
              Analyze Content
            </>
          )}
        </button>
      </div>

      {result && (
        <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
          result.isMisinformation ? 'border-red-500' : 'border-green-500'
        }`}>
          <div className="flex items-start space-x-4">
            {result.isMisinformation ? (
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
            ) : (
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            )}
            <div>
              <h3 className="text-lg font-semibold">
                {result.isMisinformation ? 'Potential Misinformation Detected' : 'Content Appears Reliable'}
              </h3>
              <p className="text-gray-600 mt-2">{result.explanation}</p>
              <div className="mt-4">
                <div className="text-sm text-gray-500">Confidence Score</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div
                    className={`h-2.5 rounded-full ${
                      result.isMisinformation ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {result.confidence.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}