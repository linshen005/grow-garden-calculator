'use client';

import { useState } from 'react';
import { crops, type Crop } from '@/lib/data';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

type SortOrder = 'asc' | 'desc';
type SortKey = 'name' | 'baseValue' | 'rarity';

export default function ValueRankingPage() {
  const [sortKey, setSortKey] = useState<SortKey>('baseValue');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterRarity, setFilterRarity] = useState<string>('all');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) return <ArrowUpDown size={16} className="text-gray-400" />;
    return sortOrder === 'asc' ?
      <ArrowUp size={16} className="text-blue-600" /> :
      <ArrowDown size={16} className="text-blue-600" />;
  };

  const filteredAndSortedCrops = crops
    .filter(crop => filterRarity === 'all' || crop.rarity === filterRarity)
    .sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortKey) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'baseValue':
          aValue = a.baseValue;
          bValue = b.baseValue;
          break;
        case 'rarity': {
          const rarityOrder = { common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5 };
          aValue = rarityOrder[a.rarity];
          bValue = rarityOrder[b.rarity];
          break;
        }
        default:
          return 0;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortOrder === 'asc' ? comparison : -comparison;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

  const getRarityColor = (rarity: Crop['rarity']) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100';
      case 'uncommon': return 'text-green-600 bg-green-100';
      case 'rare': return 'text-blue-600 bg-blue-100';
      case 'epic': return 'text-purple-600 bg-purple-100';
      case 'legendary': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">
          📊 Value per Pound Ranking
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Compare crop values to find the most profitable farming options in Grow A Garden.
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card rounded-3xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-700">Filter by Rarity:</span>
            <select
              value={filterRarity}
              onChange={(e) => setFilterRarity(e.target.value)}
              className="apple-input"
            >
              <option value="all">All Rarities</option>
              <option value="common">Common</option>
              <option value="uncommon">Uncommon</option>
              <option value="rare">Rare</option>
              <option value="epic">Epic</option>
              <option value="legendary">Legendary</option>
            </select>
          </div>

          <div className="text-sm text-gray-600 font-medium">
            Showing {filteredAndSortedCrops.length} of {crops.length} crops
          </div>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="block md:hidden space-y-4">
        {filteredAndSortedCrops.map((crop, index) => (
          <div key={crop.id} className="glass-card rounded-2xl p-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gray-400 w-8">
                #{index + 1}
              </div>

              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crop.color} flex items-center justify-center text-2xl shadow-lg`}>
                {crop.emoji}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{crop.name}</h3>
                  <div className="text-2xl font-bold text-blue-600">
                    {crop.baseValue}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getRarityColor(crop.rarity)}`}>
                    {crop.rarity}
                  </span>
                  <span className="text-sm text-gray-600 font-medium">
                    Sheckles/kg
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block glass-card rounded-3xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 font-bold text-gray-700">Rank</th>
                <th className="text-left py-4 px-4 font-bold text-gray-700">Crop</th>
                <th
                  className="text-left py-4 px-4 font-bold text-gray-700 cursor-pointer hover:bg-white/20 rounded-lg transition-colors"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Name</span>
                    {getSortIcon('name')}
                  </div>
                </th>
                <th
                  className="text-left py-4 px-4 font-bold text-gray-700 cursor-pointer hover:bg-white/20 rounded-lg transition-colors"
                  onClick={() => handleSort('baseValue')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Value/kg</span>
                    {getSortIcon('baseValue')}
                  </div>
                </th>
                <th
                  className="text-left py-4 px-4 font-bold text-gray-700 cursor-pointer hover:bg-white/20 rounded-lg transition-colors"
                  onClick={() => handleSort('rarity')}
                >
                  <div className="flex items-center space-x-2">
                    <span>Rarity</span>
                    {getSortIcon('rarity')}
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAndSortedCrops.map((crop, index) => (
                <tr key={crop.id} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                  <td className="py-4 px-4">
                    <div className="text-2xl font-bold text-gray-400">
                      #{index + 1}
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crop.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {crop.emoji}
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="font-bold text-lg">{crop.name}</div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {crop.baseValue}
                    </div>
                    <div className="text-sm text-gray-600">Sheckles</div>
                  </td>

                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getRarityColor(crop.rarity)}`}>
                      {crop.rarity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
