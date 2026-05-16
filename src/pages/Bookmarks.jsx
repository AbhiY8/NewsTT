import React from "react";
import { useStore } from "../store/useStore";
import NewsCard from "../components/NewsCard";
import { BookmarkX } from "lucide-react";
import { Link } from "react-router-dom";

export default function Bookmarks() {
  const { bookmarks } = useStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Saved Articles
        </h1>

        {bookmarks.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-16 flex flex-col items-center text-center text-gray-500 dark:text-gray-400">
            <BookmarkX className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-600" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No saved articles</h3>
            <p className="max-w-md mx-auto">
              You haven't bookmarked any news yet. Start browsing and save articles to read them later.
            </p>
            <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Explore News
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookmarks.map((article, index) => (
              <NewsCard key={`bookmark-${article.article_id}-${index}`} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
