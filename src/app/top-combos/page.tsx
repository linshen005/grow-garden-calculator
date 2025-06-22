// 💡 Top Mutation Combos 页面：展示每个作物的最强 mutation 组合
'use client';
import { crops, getTopMutationCombos } from '@/lib/data';

export default function TopCombosPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-4xl font-bold gradient-text mb-8">💡 Top Mutation Combos</h1>
      <div className="space-y-8">
        {crops.map((crop) => {
          const combos = getTopMutationCombos(crop, 3);
          return (
            <div key={crop.id} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${crop.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {crop.emoji}
                </div>
                <div>
                  <div className="font-bold text-lg">{crop.name}</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {combos.map((combo, idx) => (
                  <div key={idx} className="bg-white/60 rounded-xl p-4 flex flex-col gap-2 shadow">
                    <div className="font-semibold text-blue-700">Combo #{idx + 1}</div>
                    <div className="text-sm text-gray-700">Growth: {combo.growth.name} (x{combo.growth.multiplier})</div>
                    <div className="text-sm text-gray-700">Temperature: {combo.temperature.name} (x{combo.temperature.multiplier})</div>
                    <div className="text-sm text-gray-700">Environmental: {combo.environmental.name} (x{combo.environmental.multiplier})</div>
                    <div className="text-sm text-gray-600 mt-2">Total Multiplier: <span className="font-bold text-purple-600">x{combo.totalMultiplier}</span></div>
                    <div className="text-lg font-bold text-green-700 mt-1">Value: {combo.value}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 