import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Page not found',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="glass-card max-w-lg w-full mx-4 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="text-6xl mb-4 select-none">👀</div>
        <h1 className="text-4xl font-bold gradient-text font-nunito mb-2">404 | Page not found</h1>
        <p className="text-gray-600 mb-6 font-nunito">Sorry, the page you are looking for does not exist or has been moved.</p>
        <Link href="/" aria-label="Back to Home">
          <span className="ios-button gradient-text font-bold text-lg">Go Home</span>
        </Link>
      </div>
    </div>
  );
} 