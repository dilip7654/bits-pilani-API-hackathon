import React, { useState } from "react";
import { Bookmark, ChevronRight } from "lucide-react";

const NewsArticle = ({ article, variant = "default", className = "" }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const variants = {
    featured:
      "bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-xl shadow-xl hover:shadow-2xl transition-all text-white",
    default:
      "bg-[#fcefef] rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10",
    compact:
      "bg-[#fcefef] rounded-lg shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10 flex flex-col h-full",
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
                <div className="text-sm text-white/80">
                  {new Date(article.publishedAt).toLocaleDateString()} •{" "}
                  {article.author || "Unknown"}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-3xl font-semibold mb-4 text-[#f8e16c]">
                  {article.title}
                </h3>
              </a>
              <p className="text-white/80 mb-4">{article.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-sm text-white">{article.author}</div>
                <div className="flex gap-3">
                  <button onClick={() => setIsBookmarked(!isBookmarked)}>
                    <Bookmark
                      className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
                    />
                  </button>
                  <ChevronRight className="w-5 h-5 text-[#f8e16c]" />
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
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#0077b6]">
                    {article.title}
                  </h3>
                </a>
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

export default NewsArticle;
