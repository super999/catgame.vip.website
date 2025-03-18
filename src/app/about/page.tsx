import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      {/* About Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          关于 CatGame Studio
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          我们是一家充满激情的游戏开发工作室，致力于创造独特而有趣的游戏体验
        </p>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">我们的故事</h2>
            <p className="text-gray-600 mb-4">
              CatGame Studio 成立于2024年，由一群热爱游戏的开发者组成。我们相信游戏不仅仅是娱乐，更是一种艺术形式和表达方式。
            </p>
            <p className="text-gray-600">
              我们的团队融合了技术专家和创意人才，致力于将创新理念转化为令人难忘的游戏体验。每一个项目都凝聚着我们对游戏的热爱和对品质的追求。
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/about-story.jpg"
              alt="Our story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">创新精神</h3>
              <p className="text-gray-600">
                我们不断探索新的游戏机制和叙事方式，为玩家带来前所未有的体验
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">品质至上</h3>
              <p className="text-gray-600">
                每一个细节都经过精心打磨，确保为玩家提供最优质的游戏体验
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">玩家至上</h3>
              <p className="text-gray-600">
                倾听玩家的声音，持续改进和优化，让每款游戏都能满足玩家需求
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">我们的团队</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 这里可以后续添加实际的团队成员信息 */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/images/team-1.jpg"
                alt="Team member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">张三</h3>
            <p className="text-gray-600">创意总监</p>
          </div>
          {/* 可以添加更多团队成员 */}
        </div>
      </section>
    </div>
  );
} 