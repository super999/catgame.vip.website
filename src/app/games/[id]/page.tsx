import React from 'react';
import Link from 'next/link';

// 模拟游戏数据
const gamesData = {
  '1': {
    title: '猫咪大冒险',
    releaseDate: '2024 Q2',
    status: '开发中',
    description: `
      <p>《猫咪大冒险》是一款充满创意的冒险游戏，玩家将扮演一只可爱的猫咪，在一个充满奇幻色彩的世界中展开冒险。</p>
      
      <h2>游戏特色</h2>
      <ul>
        <li>独特的猫咪角色系统，每只猫咪都有独特的技能和性格</li>
        <li>精美的手绘风格画面，带来视觉盛宴</li>
        <li>丰富的剧情和支线任务，让玩家沉浸其中</li>
        <li>创新的游戏玩法，结合解谜和动作元素</li>
      </ul>

      <h2>游戏背景</h2>
      <p>在一个神秘的猫咪王国中，玩家将扮演一只年轻的猫咪勇士，踏上寻找传说中的神器之旅。
      途中将遇到各种有趣的角色，解开王国的秘密，最终成为守护和平的英雄。</p>

      <h2>技术特点</h2>
      <ul>
        <li>优化的游戏引擎，确保流畅的游戏体验</li>
        <li>支持多平台，包括PC、主机和移动设备</li>
        <li>云存档功能，随时随地继续冒险</li>
      </ul>
    `,
    features: [
      '独特的猫咪角色',
      '精美的画面',
      '丰富的剧情',
      '创新的玩法'
    ],
    platforms: ['PC', 'Console', 'Mobile'],
    image: '/images/game-1.jpg',
    screenshots: [
      '/images/game-1-screenshot-1.jpg',
      '/images/game-1-screenshot-2.jpg',
      '/images/game-1-screenshot-3.jpg'
    ]
  },
  // 可以添加更多游戏数据
};

// 获取游戏数据的异步函数
function getGameData(id: string) {
  // 在实际应用中，这里可能是一个API调用
  return gamesData[id as keyof typeof gamesData];
}

// 生成静态参数
export async function generateStaticParams() {
  return Object.keys(gamesData).map((id) => ({
    id,
  }));
}

export  default async function GameDetail({ params }: { params: Promise<{ id: string }> }) {
  // 等待获取游戏数据

  // 等待外层 params 对象
//   const resolved = await params;
  // 再等待内部的 params 对象，并解构出 id
//   const { id } = await resolved.params;
//   console.log('tmp', tmp);


  // 直接解构，不需要 await
  const  {id}  =  await params;

  const game = getGameData(id);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">游戏未找到</h1>
            <Link href="/games" className="text-blue-600 hover:text-blue-800">
              返回游戏列表
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/games" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← 返回游戏列表
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* 游戏封面图 */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>

          <div className="p-8">
            {/* 游戏标题和状态 */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-gray-900">{game.title}</h1>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {game.status}
              </span>
            </div>

            {/* 发布日期 */}
            <div className="text-gray-600 mb-8">
              预计发布日期：{game.releaseDate}
            </div>

            {/* 游戏特色 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {game.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm font-medium text-gray-900">{feature}</div>
                </div>
              ))}
            </div>

            {/* 支持平台 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">支持平台</h2>
              <div className="flex gap-4">
                {game.platforms.map((platform, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* 游戏描述 */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: game.description }} />
          </div>
        </div>
      </div>
    </div>
  );
} 