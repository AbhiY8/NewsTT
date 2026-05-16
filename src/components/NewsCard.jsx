import React from 'react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import { Bookmark, ExternalLink } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function NewsCard({ article }) {
  const { addBookmark, removeBookmark, bookmarks } = useStore();
  const bookmarked = bookmarks.some((b) => b.article_id === article.article_id);

  const toggleBookmark = (e) => {
    e.preventDefault();
    if (bookmarked) {
      removeBookmark(article.article_id);
    } else {
      addBookmark(article);
    }
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={article.image_url || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80'} 
          alt={article.title}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {article.category && article.category[0] && (
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full shadow-md capitalize">
              {article.category[0]}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="font-medium text-blue-600 dark:text-blue-400">{article.source_id || 'News'}</span>
          <span>
            {article.pubDate ? formatDistanceToNow(new Date(article.pubDate), { addSuffix: true }) : 'Recently'}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {article.description || 'No description available for this article.'}
        </p>

        <div className="mt-auto flex justify-between items-center">
          <a 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-white bg-gray-900 dark:bg-blue-600 hover:bg-gray-800 dark:hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            Read More <ExternalLink className="w-4 h-4" />
          </a>
          
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition-colors ${bookmarked ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
          >
            <Bookmark className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
