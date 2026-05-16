import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../lib/api";
import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import { INDIA_STATES, MAJOR_CITIES } from "../lib/constants";
import { MapPin, FilterX } from "lucide-react";

export default function Landing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const searchQ = searchParams.get("q") || "";
  
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Build the final query for the API
  const finalQ = [searchQ, selectedState, selectedCity].filter(Boolean).join(" ");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["news", category, finalQ],
    queryFn: () => fetchNews({ category, q: finalQ }),
  });

  // Reset city when state changes
  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  const handleClearFilters = () => {
    setSelectedState("");
    setSelectedCity("");
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      
      {/* Ticker / Banner area could go here */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
              {category === "All" ? "Latest News in India" : `${category} News`}
            </h1>
            {finalQ && (
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                Showing results for "{finalQ}"
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <MapPin className="w-4 h-4 text-gray-400 ml-2" />
            
            <select 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-transparent text-sm border-none focus:ring-0 text-gray-700 dark:text-gray-300 outline-none cursor-pointer"
            >
              <option value="">All States</option>
              {INDIA_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <div className="w-px h-5 bg-gray-300 dark:bg-gray-600"></div>

            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState || !MAJOR_CITIES[selectedState]}
              className="bg-transparent text-sm border-none focus:ring-0 text-gray-700 dark:text-gray-300 outline-none cursor-pointer disabled:opacity-50"
            >
              <option value="">All Cities</option>
              {selectedState && MAJOR_CITIES[selectedState]?.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {(selectedState || searchQ || category !== "All") && (
              <button 
                onClick={handleClearFilters}
                className="ml-2 p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-1 text-xs font-medium"
              >
                <FilterX className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : isError ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center text-red-600 dark:text-red-400">
            <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
            <p>{error.message || "Unable to fetch news at this moment. Please try again later."}</p>
          </div>
        ) : !data?.results?.length ? (
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-12 text-center text-gray-500 dark:text-gray-400">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">No News Found</h3>
            <p>Try adjusting your search filters or selecting a different category.</p>
            <button onClick={handleClearFilters} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View All News
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.results.map((article, index) => (
              <NewsCard key={`${article.article_id}-${index}`} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
