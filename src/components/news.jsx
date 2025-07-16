import React, { useState, useEffect } from "react";
import { Bookmark, ChevronRight } from "lucide-react";

const NewsArticle = ({ article, variant = "default", className = "" }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const variants = {
    featured:
      "bg-[#e0f7fa] text-[#03045e] rounded-xl shadow-xl hover:shadow-2xl transition-all", // Applied #e0f7fa background and dark blue text for the big card
    default:
      "bg-white text-[#03045e] rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10", 
    compact:
      "bg-[#e0f7fa] text-[#03045e] rounded-lg shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10 flex flex-col h-full", // Applied the light blue background for small cards
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      <div className="flex flex-col h-full">
        {variant === "featured" ? (
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/10 mb-4">
                <img
                  src={article.urlToImage || "/api/placeholder/600/338"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#f8e16c] text-[#03045e]">
                  {article.source.name}
                </span>
                <div className="text-sm text-[#03045e]">
                  {new Date(article.publishedAt).toLocaleDateString()} •{" "}
                  {article.author || "Unknown"}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 text-[#03045e]">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {article.title}
                </a>
              </h3>
              <p className="text-[#03045e] mb-4">{article.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-sm text-[#03045e]">{article.author}</div>
                <div className="flex gap-3">
                  <button onClick={() => setIsBookmarked(!isBookmarked)}>
                    <Bookmark
                      className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex gap-4">
              <div className="w-1/3">
                <div className="aspect-video rounded-lg overflow-hidden bg-[#fcefef]">
                  <img
                    src={article.urlToImage || "/api/placeholder/240/135"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-2/3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-[#00b4d8]/20 text-[#0077b6]">
                    {article.source.name}
                  </span>
                  <div className="text-xs text-[#03045e]">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#03045e]">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-sm text-[#03045e] line-clamp-2">
                  {article.description || article.content}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AllNews = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [latestNews, setLatestNews] = useState([]);
  const [search, setSearch] = useState("health management");
  const [visibleNewsCount, setVisibleNewsCount] = useState(9);
  const API_KEY = "64251548edf142259a443053c457d966";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        );
        const data = await response.json();

        if (data.articles.length > 0) {
          setFeaturedArticles(data.articles.slice(0, 5));
          setLatestNews(data.articles.slice(5, 50));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [search]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) =>
        (prevIndex + 1) % featuredArticles.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArticles]);

  const featuredArticle =
    featuredArticles.length > 0
      ? featuredArticles[currentFeaturedIndex]
      : null;

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="flex justify-between items-center mt-20">
          <h2 className="text-4xl text-[#03045e] font-semibold">Latest News</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 p-3 border rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-12">
            {featuredArticle && (
              <NewsArticle article={featuredArticle} variant="featured" />
            )}
          </div>

          <div className="col-span-12 space-y-6">
            {Array.from({ length: Math.ceil(visibleNewsCount / 3) }).map(
              (_, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-6">
                  {latestNews
                    .slice(rowIndex * 3, rowIndex * 3 + 3)
                    .map((article, idx) => (
                      <div key={idx} className="flex-1 min-w-[300px]">
                        <NewsArticle article={article} variant="compact" />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>

          {visibleNewsCount < latestNews.length && (
            <div className="col-span-12 flex justify-center text-4xl">
              <button
                onClick={loadMoreNews}
                className="px-6 py-2 mt-6 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
