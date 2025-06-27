import { crops, getTopMutationCombos } from '@/lib/data';

export default function MutationRanking() {
  // 获取每个作物的最佳变异组合
  const cropCombos = crops.map(crop => {
    const [bestCombo] = getTopMutationCombos(crop, 1);
    return {
      crop,
      ...bestCombo
    };
  });

  // 按 totalMultiplier 从高到低排序
  const sorted = cropCombos.sort((a, b) => b.totalMultiplier - a.totalMultiplier);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold gradient-text mb-8 text-center">📈 Mutation Multiplier Rankings</h1>
      <div className="space-y-6">
        {sorted.map(({ crop, growth, temperature, environmental, totalMultiplier, value }, idx) => (
          <article key={crop.id} className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 shadow">
            <div className="flex items-center gap-4 min-w-[120px]">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crop.color} flex items-center justify-center text-2xl shadow-lg`}>
                {crop.emoji}
              </div>
              <div>
                <div className="font-bold text-lg gradient-text">{crop.name}</div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4">
                <div className="text-xs text-gray-500 font-semibold mb-1">Growth</div>
                <div className="font-bold text-blue-700">{growth.name} <span className="text-xs">(x{growth.multiplier})</span></div>
              </div>
              <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4">
                <div className="text-xs text-gray-500 font-semibold mb-1">Temperature</div>
                <div className="font-bold text-purple-700">{temperature.name} <span className="text-xs">(x{temperature.multiplier})</span></div>
              </div>
              <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4">
                <div className="text-xs text-gray-500 font-semibold mb-1">Environmental</div>
                <div className="font-bold text-green-700">{environmental.name} <span className="text-xs">(x{environmental.multiplier})</span></div>
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[120px]">
              <div className="text-xs text-gray-500 font-semibold">Total Multiplier</div>
              <div className="text-xl font-bold text-purple-600">x{totalMultiplier}</div>
              <div className="text-xs text-gray-500 font-semibold mt-2">Value</div>
              <div className="text-lg font-bold text-green-700">{value.toLocaleString()}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
} 