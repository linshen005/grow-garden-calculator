// Footer.tsx - Modern glass-card footer with logo, nav, copyright, dark/light mode
'use client';
import type { FC } from 'react';

const links = [
  { href: '/value-ranking', label: 'Crops' },
  { href: '/mutation-ranking', label: 'Mutations' },
  { href: '/pets', label: 'Pets' },
  { href: '/gears', label: 'Gears' },
  { href: '/eggs', label: 'Eggs' },
  { href: '/stocks', label: 'Stocks' },
  { href: '/values', label: 'Values' },
  { href: '/codes', label: 'Codes' },
  { href: '/wiki', label: 'Wiki' },
  { href: '/faq', label: 'FAQ' },
];

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="glass-card border-t border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl mt-12 px-4 py-8 shadow-xl text-gray-600 dark:text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + 站名 */}
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span className="text-2xl select-none">🌱</span>
          <span className="font-bold text-lg gradient-text select-none">Grow A Garden</span>
        </div>
        {/* 导航链接 */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-base font-medium">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* 版权信息 */}
        <div className="text-sm text-gray-400 dark:text-gray-500 text-center md:text-right select-none">
          &copy; {year} Grow A Garden Calculator.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
