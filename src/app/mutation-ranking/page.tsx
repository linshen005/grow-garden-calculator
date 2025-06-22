// 🧬 Mutation Ranking 页面：展示所有 mutation 排行榜
'use client';
import { mutations } from '@/lib/data';

const categoryMap: Record<string, { label: string; emoji: string }> = {
  growth: { label: 'Growth', emoji: '🧬' },
  temperature: { label: 'Temperature', emoji: '❄️' },
  environmental: { label: 'Environmental', emoji: '🌿' },
};

export default function MutationRankingPage() {
  const sorted = [...mutations].sort((a, b) => b.multiplier - a.multiplier);
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold gradient-text mb-8">🧬 Mutation Ranking</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map((mutation) => {
          const { label, emoji } = categoryMap[mutation.category];
          return (
            <div key={mutation.id} className="glass-card rounded-xl shadow-md p-4 flex flex-col items-start space-y-2 text-left">
              <div className="text-lg font-bold text-purple-700 flex items-center gap-2">
                <span>{emoji}</span> {mutation.name}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Category: <span className="font-semibold">{label}</span>
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Multiplier: <span className="font-bold text-blue-600">x{mutation.multiplier}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 