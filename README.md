# CatGame 工作室官方网站

这是 CatGame 游戏工作室的官方网站（[catgame.vip](https://catgame.vip)），使用 Next.js 15 和 Tailwind CSS 4 构建。

## 项目概述

CatGame 官网是一个现代化、响应式的游戏工作室展示网站，为访问者提供工作室信息、游戏作品展示以及最新动态。

### 主要功能

- **现代响应式首页**：展示工作室特色和亮点
- **关于我们**：介绍工作室历史、团队和愿景
- **游戏展示**：展示工作室开发的游戏作品
- **新闻动态**：发布工作室最新消息和游戏更新
- **联系页面**：提供联系表单和联系方式

## 技术栈

- **框架**：Next.js 15
- **语言**：TypeScript
- **样式**：Tailwind CSS 4
- **构建工具**：Turbopack
- **部署**：静态导出 (Static Export)

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

然后在浏览器中访问 [http://localhost:3000](http://localhost:3000)

### 构建项目

```bash
npm run build
```

构建后的文件将生成在 `.next` 目录中。

### 导出静态文件

```bash
npm run export
```

静态文件将生成在 `out` 目录中，可直接部署到任何静态文件服务器。

## 部署

### 生成部署包

```bash
npm run deploy
```

这将创建一个 `deploy.tar.gz` 文件，包含所有静态网站文件。

### 服务器部署

1. 将 `deploy.tar.gz` 上传到服务器
2. 执行 `server_deploy.sh` 脚本完成部署
3. 如需配置HTTPS，可使用 `server_install_cert.sh` 脚本

## 网站结构

```
src/
├── app/                    # 应用页面
│   ├── page.tsx            # 首页
│   ├── about/              # 关于我们页面
│   ├── games/              # 游戏展示页面
│   │   └── [id]/           # 游戏详情页(动态路由)
│   ├── news/               # 新闻页面
│   │   └── [id]/           # 新闻详情页(动态路由)
│   └── contact/            # 联系页面
├── components/             # 可复用组件
│   ├── Navigation.tsx      # 导航栏组件
│   └── Footer.tsx          # 页脚组件
└── styles/                 # 全局样式
```

## 许可证

[MIT](LICENSE)
