import React from 'react';
import Link from 'next/link';

// 模拟新闻数据
const newsData = [
  {
    id: '1',
    title: 'CatGame 工作室发布首款游戏预告',
    date: '2024-03-20',
    excerpt: '我们很高兴地宣布，CatGame 工作室的首款游戏即将发布！这款游戏将带来独特的游戏体验...',
    image: '/images/news-1.jpg'
  },
  // 可以添加更多新闻数据
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">新闻动态</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <Link 
              key={news.id} 
              href={`/news/${news.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* 暂时使用占位图标替代图片 */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <div className="text-sm text-gray-500">{news.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 