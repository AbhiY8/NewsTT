const BASE_URL = 'https://newsdata.io/api/1/news';
const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;

export const fetchNews = async ({ category, q, page }) => {
  try {
    const params = new URLSearchParams({
      apikey: API_KEY,
      country: 'in', // Force India news
      language: 'en',
    });

    if (category && category !== 'All') {
      params.append('category', category.toLowerCase());
    }

    if (q) {
      params.append('q', q);
    }

    if (page) {
      params.append('page', page);
    }

    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    
    // Fallback if status is error
    if (data.status === 'error') {
      throw new Error(data.results?.message || 'Error fetching news');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
