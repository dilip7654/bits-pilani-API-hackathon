import React, { useState } from 'react';
import {
  Search, Bookmark, ChevronRight, Brain, Heart, Apple
} from 'lucide-react';

const NewsArticle = ({ article, variant = "default", className="" }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const variants = {
    featured: "bg-gradient-to-br from-[#0077b6] to-[#00b4d8] rounded-xl shadow-xl hover:shadow-2xl transition-all text-white",
    default: "bg-[#fcefef] rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10",
    compact: "bg-[#fcefef] rounded-xl shadow-lg hover:shadow-xl transition-all border border-[#0077b6]/10"
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      <div className="flex flex-col h-full">
        {variant === 'featured' ? (
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="md:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden bg-black/10 mb-4">
                <img src="/api/placeholder/600/338" alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#f8e16c] text-[#03045e]">
                  {article.category}
                </span>
                <div className="text-sm text-white/80">
                  {article.date} • {article.readTime} min read
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 text-[#f8e16c]">{article.title}</h3>
              <p className="text-white/80 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-sm text-white">{article.author}</div>
                <div className="flex gap-3">
                  <button onClick={() => setIsBookmarked(!isBookmarked)}>
                    <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
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
                  <img src="/api/placeholder/240/135" alt={article.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-2/3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-[#00b4d8]/20 text-[#0077b6]">
                    {article.category}
                  </span>
                  <div className="text-xs text-[#03045e]">
                    {article.readTime} min read
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0077b6]">{article.title}</h3>
                <p className="text-sm text-[#03045e] line-clamp-2">{article.excerpt || article.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-[#00b4d8]">{article.author}</div>
                  <div className="text-xs text-[#fbb13c]">{article.date}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const QuickInsight = ({ insight }) => (
  <div className="bg-[#fcefef] rounded-xl p-4 shadow-sm border border-[#0077b6]/10">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-[#0077b6]/10">
        <insight.icon className="w-5 h-5 text-[#0077b6]" />
      </div>
      <div>
        <h3 className="font-semibold text-[#0077b6] text-sm">{insight.title}</h3>
        <p className="text-sm text-[#03045e]">{insight.text}</p>
      </div>
    </div>
  </div>
);

const AllNews = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticle = {
    category: "Breaking News",
    title: "Groundbreaking AI System Detects Early-Stage Cancer with 99% Accuracy",
    excerpt: "Revolutionary deep learning algorithm outperforms human diagnosticians in early cancer detection across multiple types, promising to transform early intervention strategies.",
    author: "Dr. Sarah Chen",
    date: "Jan 02, 2025",
    readTime: 8
  };

  const latestNews = [
    {
      category: "Research",
      title: "New Gene Therapy Shows Promise for Rare Diseases",
      excerpt: "Clinical trials demonstrate unprecedented success rates in treating genetic disorders.",
      author: "Dr. James Wilson",
      date: "Jan 02, 2025",
      readTime: 6
    },
    {
      category: "Public Health",
      title: "Global Health Initiative Launches $2B Program",
      excerpt: "Major funding boost aims to improve healthcare access in developing regions.",
      author: "Emma Stewart",
      date: "Jan 02, 2025",
      readTime: 5
    }
  ];

  const healthTips = [
    {
      category: "Wellness",
      title: "Stay Hydrated: The 8 Glasses Rule",
      content: "Drink at least 8 glasses of water daily for optimal health. Studies show proper hydration improves energy levels and brain function.",
      author: "Dr. Jessica Miller",
      date: "Jan 02, 2025"
    },
    {
      category: "Fitness",
      title: "Daily Exercise: The 30-Minute Solution",
      content: "Incorporate 30 minutes of exercise into your routine. Research indicates moderate daily activity significantly reduces health risks.",
      author: "Mark Stevens",
      date: "Jan 02, 2025"
    }
  ];

  const quickInsights = [
    {
      icon: Brain,
      title: "Mental Health",
      text: "New study shows meditation reduces stress by 43%"
    },
    {
      icon: Heart,
      title: "Heart Health",
      text: "Walking 30 minutes daily lowers heart disease risk"
    },
    {
      icon: Apple,
      title: "Nutrition",
      text: "Plant-based diets gain popularity among millennials"
    }
  ];

  return (
    <div className="min-h-screen bg-[#b1e0e9]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#03045e]">
            Health & Wellness Today
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-lg border border-[#0077b6] focus:outline-none focus:ring-2 focus:ring-[#00b4d8]/40"
              />
              <Search className="w-5 h-5 text-[#0077b6] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="px-4 py-2 bg-[#00b4d8] text-white rounded-lg font-medium hover:bg-[#0077b6] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Featured Article */}
          <div className="col-span-12">
            <NewsArticle article={featuredArticle} variant="featured" />
          </div>

          {/* Quick Insights + First Column of News */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#03045e] mb-4">Quick Insights</h2>
              <div className="space-y-4">
                {quickInsights.map((insight, idx) => (
                  <QuickInsight key={idx} insight={insight} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#03045e] mb-4">Trending</h2>
              <div className="space-y-4">
                {latestNews.slice(0, 2).map((article, idx) => (
                  <NewsArticle key={idx} article={article} variant="default" />
                ))}
              </div>
            </div>
          </div>

          {/* Main News Feed */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#03045e]">Latest Updates</h2>
              <button className="text-[#0077b6] text-sm font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid gap-4">
              {[...latestNews, ...healthTips.slice(0, 4)].map((article, idx) => (
                <NewsArticle key={idx} article={article} variant="default" />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-12">
            <div className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white text-center py-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-lg mb-6">Get the latest health updates directly in your inbox.</p>
              <button className="px-6 py-2 bg-[#f8e16c] text-[#03045e] rounded-lg font-medium hover:bg-[#fbb13c] transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
