export interface Post {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  content: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    title: '静态博客搭建指南',
    summary: '介绍如何使用React和GitHub Pages搭建静态博客',
    createdAt: '2025-06-15',
    content: '这里是静态博客搭建指南的完整内容...'
  },
  {
    id: '2',
    title: '极简设计原则',
    summary: '探讨极简主义在网页设计中的应用',
    createdAt: '2025-06-10',
    content: '这里是极简设计原则的完整内容...'
  },
  {
    id: '3',
    title: 'React路由基础',
    summary: 'React Router的基本使用方法介绍',
    createdAt: '2025-06-05',
    content: '这里是React路由基础的完整内容...'
  }
];