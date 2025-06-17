import { Link, useParams } from "react-router-dom";
import { mockPosts } from "@/lib/mockPosts";

export default function PostDetail() {
  const { id } = useParams();
  const post = mockPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="max-w-[800px] mx-auto p-4">
          <div className="flex gap-4">
            <Link to="/" className="text-black">首页</Link>
            <Link to="/about" className="text-black">关于</Link>
          </div>
        </nav>
        <main className="max-w-[800px] mx-auto p-4">
          <p>文章不存在</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 - 与首页一致 */}
      <nav className="max-w-[800px] mx-auto p-4">
        <div className="flex gap-4">
          <Link to="/" className="text-black">首页</Link>
          <Link to="/about" className="text-black">关于</Link>
        </div>
      </nav>

      {/* 文章内容 */}
      <main className="max-w-[800px] mx-auto p-4">
        <article className="px-5">
          <h1 className="text-2xl font-bold mb-6">{post.title}</h1>
          <time className="text-[#888888] text-sm block mb-6">{post.createdAt}</time>
          <div 
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}
