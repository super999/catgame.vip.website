import React from 'react';
import Link from 'next/link';

// 模拟游戏数据
const gamesData = [
  {
    id: '1',
    title: '猫咪大冒险',
    status: '开发中',
    releaseDate: '2024 Q2',
    description: '一款充满创意的冒险游戏，玩家将扮演一只可爱的猫咪，在一个充满奇幻色彩的世界中展开冒险。',
    image: '/images/game-1.jpg',
    platforms: ['PC', 'Console', 'Mobile']
  },
  // 可以添加更多游戏
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">我们的游戏</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gamesData.map((game) => (
            <Link 
              key={game.id}
              href={`/games/${game.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* 暂时使用占位图标替代图片 */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">{game.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {game.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{game.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 