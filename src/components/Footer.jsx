import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <Link to="/" className="text-xl font-black tracking-tighter text-blue-600 dark:text-blue-400">
            News<span className="text-gray-900 dark:text-white">Till</span>Today
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Your reliable source for the latest news across India.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
