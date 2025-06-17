import { Link } from "react-router-dom";
import { mockPosts } from "@/lib/mockPosts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="max-w-[800px] mx-auto p-4">
        <div className="flex gap-4">
          <Link to="/" className="text-black">首页</Link>
          <Link to="/about" className="text-black">关于</Link>
        </div>
      </nav>

      {/* 文章列表 */}
      <main className="max-w-[800px] mx-auto p-4">
        <div className="space-y-10">
          {mockPosts.map((post) => (
            <article key={post.id}>
              <Link to={`/post/${post.id}`}>
                <h2 className="font-bold text-black text-xl mb-2">{post.title}</h2>
                <p className="text-[#888888] mb-1">{post.summary}</p>
                <time className="text-[#888888] text-sm">{post.createdAt}</time>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}