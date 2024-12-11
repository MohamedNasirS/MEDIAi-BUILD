import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-2xl font-bold">TruthGuard</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-200">About</a></li>
              <li><a href="#" className="hover:text-blue-200">How it Works</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}