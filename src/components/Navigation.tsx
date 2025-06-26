'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calculator, TrendingUp, Zap, Trophy, BookOpen, Menu, X } from 'lucide-react';

const navigationItems = [
  { href: '/', label: 'Calculator', icon: Calculator, emoji: '🌱' },
  { href: '/value-ranking', label: 'Value/lb', icon: TrendingUp, emoji: '📊' },
  { href: '/top-combos', label: 'Top Combos', icon: Trophy, emoji: '💡' },
  { href: '/wiki', label: 'Wiki', icon: BookOpen, emoji: '🧭' },
  { href: '/faq', label: 'FAQ', icon: BookOpen, emoji: '❓' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="glass-card rounded-3xl p-2 mx-4 mt-4 mb-8 sticky top-4 z-50 hidden md:block">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 px-4 py-2">
            <div className="text-2xl">🌱</div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Grow A Garden</h1>
              <p className="text-sm text-gray-600 font-medium">Calculator</p>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-button flex items-center space-x-2 ${
                    isActive ? 'nav-button-active' : ''
                  }`}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-2">
            <button className="nav-button text-sm">🇺🇸 EN</button>
            <button className="nav-button text-sm">🇨🇳 CN</button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="glass-card rounded-t-3xl p-4 mx-4 mt-4 md:hidden sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl">🌱</div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Grow A Garden</h1>
              <p className="text-xs text-gray-600 font-medium">Calculator</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-button p-2"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-button flex items-center space-x-2 justify-center py-3 ${
                      isActive ? 'nav-button-active' : ''
                    }`}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Language Toggle Mobile */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
              <button className="nav-button text-sm px-4 py-2">🇺🇸 EN</button>
              <button className="nav-button text-sm px-4 py-2">🇨🇳 CN</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
