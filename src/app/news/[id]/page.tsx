import React from 'react';
import Link from 'next/link';

// 模拟新闻数据
const newsData = {
  '1': {
    title: 'CatGame 工作室发布首款游戏预告',
    date: '2024-03-20',
    content: `
      <p>我们很高兴地宣布，CatGame 工作室的首款游戏即将发布！</p>
      
      <h2>游戏特色</h2>
      <ul>
        <li>独特的猫咪角色设计</li>
        <li>精美的游戏画面</li>
        <li>引人入胜的故事情节</li>
        <li>创新的游戏玩法</li>
      </ul>

      <h2>发布日期</h2>
      <p>游戏将于 2024 年第二季度正式发布，敬请期待！</p>

      <h2>关于我们</h2>
      <p>CatGame 工作室致力于为玩家带来独特的游戏体验。我们的团队由充满热情的开发者组成，
      专注于创造有趣且富有创意的游戏作品。</p>
    `,
    author: 'CatGame 团队',
    image: '/images/news-1.jpg'
  },
  // 可以添加更多新闻数据
};

// 获取新闻数据的异步函数
async function getNewsData(id: string) {
  // 在实际应用中，这里可能是一个API调用
  return newsData[id as keyof typeof newsData];
}

// 生成静态参数
export async function generateStaticParams() {
  return Object.keys(newsData).map((id) => ({
    id,
  }));
}

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  // 等待获取新闻数据
  const { id } = await params;

  const news = await getNewsData(id);
  
  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">新闻未找到</h1>
            <Link href="/news" className="text-blue-600 hover:text-blue-800">
              返回新闻列表
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/news" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← 返回新闻列表
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>

            <div className="flex items-center text-gray-600 mb-8">
              <span>{news.date}</span>
              <span className="mx-2">•</span>
              <span>{news.author}</span>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
} 