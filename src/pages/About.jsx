import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full text-blue-600 dark:text-blue-400">
              <Info className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              About Us
            </h1>
          </div>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              Welcome to <strong>NewsTillToday</strong>, your trusted source for the latest and most comprehensive news across India. Our mission is to empower our readers with accurate, unbiased, and timely information.
            </p>
            <p>
              In a rapidly changing world, staying informed is more crucial than ever. Whether it's politics, technology, sports, business, or health, our platform aggregates top stories from reliable sources to bring you a holistic view of current events.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Vision</h2>
            <p>
              We believe in the power of knowledge. Our vision is to build a digital ecosystem where every citizen has access to high-quality journalism, free from noise and misinformation. We strive to be the bridge that connects you to the realities of our nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
