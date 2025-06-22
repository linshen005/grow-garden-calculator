// 顶部导航栏组件：用于页面顶部的导航
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="w-full py-4 mb-8 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">作物计算器</Link>
        <div className="space-x-4">
          <Link href="/">首页</Link>
          <Link href="/value-ranking">单位价值排行榜</Link>
        </div>
      </div>
    </nav>
  );
} 