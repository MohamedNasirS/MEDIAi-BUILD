import React from 'react';
import { Header } from './components/Header';
import { ContentAnalyzer } from './components/ContentAnalyzer';
import { ChatInterface } from './components/ChatInterface';
import { InfoSection } from './components/InfoSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Detect Misinformation with AI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Use advanced AI technology to analyze and verify the credibility of news articles and social media content.
            </p>
          </div>
        </div>

        <ContentAnalyzer />
        <ChatInterface />
        <InfoSection />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 TruthGuard. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            This is a demonstration of how AI could help detect misinformation.
            Results should not be considered as definitive fact-checking.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;