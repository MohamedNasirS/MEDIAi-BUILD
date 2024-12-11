import React from 'react';
import { Brain, Shield, AlertCircle } from 'lucide-react';

export function InfoSection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Brain className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">AI Analysis</h3>
            <p className="text-gray-600 text-center">
              Advanced AI models analyze content patterns, language, and context to identify potential misinformation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Fact Checking</h3>
            <p className="text-gray-600 text-center">
              Content is cross-referenced with reliable sources and fact-checking databases.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Real-time Alerts</h3>
            <p className="text-gray-600 text-center">
              Get instant feedback on content reliability with detailed explanations and confidence scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}