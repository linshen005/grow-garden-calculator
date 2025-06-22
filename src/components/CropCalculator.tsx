'use client';

import { useState } from 'react';
import { crops, mutations, defaultCalculatorState, calculateCropValue, getTotalMultiplier, type Crop, type CalculatorState } from '@/lib/data';

export default function CropCalculator() {
  const [state, setState] = useState<CalculatorState>(defaultCalculatorState);

  const updateState = (updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const totalValue = calculateCropValue(state);
  const totalMultiplier = getTotalMultiplier(state);

  const growthMutations = mutations.filter(m => m.category === 'growth');
  const temperatureMutations = mutations.filter(m => m.category === 'temperature');
  const environmentalMutations = mutations.filter(m => m.category === 'environmental');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold gradient-text">
          🌱 Grow A Garden Calculator
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Calculate the value of your crops in Roblox Grow A Garden with mutations, weight, and friend boosts.
        </p>
      </div>

      {/* Crop Selection */}
      <div className="glass-card rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Select Your Crop
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {crops.map((crop) => (
            <button
              key={crop.id}
              onClick={() => updateState({ selectedCrop: crop })}
              className={`crop-card flex flex-col items-center space-y-2 p-4 ${
                state.selectedCrop?.id === crop.id ? 'crop-card-selected' : ''
              }`}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${crop.color} flex items-center justify-center text-2xl shadow-lg`}>
                {crop.emoji}
              </div>
              <span className="text-sm font-medium text-center text-gray-700">
                {crop.name}
              </span>
              <span className="text-xs font-bold text-blue-600">
                {crop.baseValue} S/kg
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Calculator Inputs */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Fields */}
        <div className="glass-card rounded-3xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-center mb-4">
            🔢 Crop Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={state.weight}
                onChange={(e) => updateState({ weight: Number.parseFloat(e.target.value) || 0 })}
                className="apple-input w-full"
                placeholder="Enter weight..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity (pieces)
              </label>
              <input
                type="number"
                min="1"
                value={state.quantity}
                onChange={(e) => updateState({ quantity: Number.parseInt(e.target.value) || 0 })}
                className="apple-input w-full"
                placeholder="Enter quantity..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Friend Boost (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={state.friendBoost}
                onChange={(e) => updateState({ friendBoost: Number.parseInt(e.target.value) || 0 })}
                className="apple-input w-full"
                placeholder="Enter friend boost..."
              />
            </div>
          </div>
        </div>

        {/* Mutation Selectors */}
        <div className="glass-card rounded-3xl p-6 space-y-6">
          <h3 className="text-xl font-bold text-center mb-4">
            🧬 Mutations
          </h3>

          <div className="space-y-4">
            {/* Growth Mutations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Growth Mutation
              </label>
              <select
                value={state.growthMutation}
                onChange={(e) => updateState({ growthMutation: e.target.value })}
                className="apple-input w-full"
              >
                {growthMutations.map((mutation) => (
                  <option key={mutation.id} value={mutation.id}>
                    {mutation.name} ({mutation.multiplier}x)
                  </option>
                ))}
              </select>
            </div>

            {/* Temperature Mutations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Temperature Mutation
              </label>
              <select
                value={state.temperatureMutation}
                onChange={(e) => updateState({ temperatureMutation: e.target.value })}
                className="apple-input w-full"
              >
                {temperatureMutations.map((mutation) => (
                  <option key={mutation.id} value={mutation.id}>
                    {mutation.name} (+{mutation.multiplier})
                  </option>
                ))}
              </select>
            </div>

            {/* Environmental Mutations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Environmental Mutation
              </label>
              <select
                value={state.environmentalMutation}
                onChange={(e) => updateState({ environmentalMutation: e.target.value })}
                className="apple-input w-full"
              >
                {environmentalMutations.map((mutation) => (
                  <option key={mutation.id} value={mutation.id}>
                    {mutation.name} (+{mutation.multiplier})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="glass-card rounded-3xl p-8">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">
            💰 Total Value
          </h3>

          {state.selectedCrop ? (
            <div className="space-y-4">
              <div className="text-6xl font-bold gradient-text">
                {totalValue.toLocaleString()}
              </div>
              <div className="text-xl text-gray-600 font-medium">
                Sheckles
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4">
                  <div className="text-lg font-bold text-gray-700">Crop</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {state.selectedCrop.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {state.weight} kg × {state.quantity} pcs
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4">
                  <div className="text-lg font-bold text-gray-700">Total Multiplier</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {totalMultiplier.toFixed(2)}x
                  </div>
                  <div className="text-sm text-gray-600">
                    With friend boost
                  </div>
                </div>

                <div className="bg-white/40 backdrop-blur-lg rounded-2xl p-4">
                  <div className="text-lg font-bold text-gray-700">Base Value</div>
                  <div className="text-2xl font-bold text-green-600">
                    {state.selectedCrop.baseValue}
                  </div>
                  <div className="text-sm text-gray-600">
                    Sheckles per kg
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-xl">
              Select a crop to see its value
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
