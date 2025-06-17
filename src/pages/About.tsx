import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 - 与首页一致 */}
      <nav className="max-w-[800px] mx-auto p-4">
        <div className="flex gap-4">
          <Link to="/" className="text-black">首页</Link>
          <Link to="/about" className="text-black">关于</Link>
        </div>
      </nav>

      {/* 关于内容 */}
      <main className="max-w-[800px] mx-auto p-4">
        <article className="text-base text-black">
          <h1 className="text-xl font-bold mb-4">关于这个博客</h1>
          <p className="mb-4">
            这是一个极简风格的静态博客网站，使用React构建，部署在GitHub Pages上。
          </p>
          <p className="mb-4">
            项目旨在展示如何快速搭建和部署一个简单的静态博客，同时保持极致的简洁性和易用性。
          </p>
          <p>
            所有文章内容以Markdown格式编写，通过简单的组件渲染为HTML页面。
          </p>
        </article>
      </main>
    </div>
  );
}
