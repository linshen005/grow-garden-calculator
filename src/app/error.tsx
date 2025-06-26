'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export const metadata = {
  title: 'Something went wrong',
};

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    // 可用于上报错误
    // console.error(error);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="glass-card max-w-lg w-full mx-4 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="text-6xl mb-4 select-none">🚧</div>
        <h1 className="text-4xl font-bold gradient-text font-nunito mb-2">Something went wrong</h1>
        <p className="text-red-600 mb-2 font-nunito">{error.message}</p>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => reset()}
            className="ios-button gradient-text font-bold text-lg"
            aria-label="Try again"
          >
            Try again
          </button>
          <Link href="/" aria-label="Back to Home">
            <span className="ios-button gradient-text font-bold text-lg">Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 