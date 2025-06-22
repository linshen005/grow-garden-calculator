export interface Crop {
    id: string;
    name: string;
    nameZh?: string;
    baseValue: number; // Base value in Sheckles per kg
    emoji: string;
    color: string; // For the card background
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  }
  
  export interface Mutation {
    id: string;
    name: string;
    nameZh?: string;
    multiplier: number;
    category: 'growth' | 'temperature' | 'environmental';
    description?: string;
    descriptionZh?: string;
    exclusiveWith?: string[]; // IDs of mutations that can't be combined
  }
  
  // Sample crops data based on the original website
  export const crops: Crop[] = [
    { id: 'apple', name: 'Apple', nameZh: '苹果', baseValue: 87, emoji: '🍎', color: 'from-red-400 to-red-500', rarity: 'common' },
    { id: 'banana', name: 'Banana', nameZh: '香蕉', baseValue: 45, emoji: '🍌', color: 'from-yellow-400 to-yellow-500', rarity: 'common' },
    { id: 'grape', name: 'Grape', nameZh: '葡萄', baseValue: 125, emoji: '🍇', color: 'from-purple-400 to-purple-500', rarity: 'uncommon' },
    { id: 'strawberry', name: 'Strawberry', nameZh: '草莓', baseValue: 156, emoji: '🍓', color: 'from-pink-400 to-red-400', rarity: 'uncommon' },
    { id: 'watermelon', name: 'Watermelon', nameZh: '西瓜', baseValue: 234, emoji: '🍉', color: 'from-green-400 to-green-500', rarity: 'uncommon' },
    { id: 'pineapple', name: 'Pineapple', nameZh: '菠萝', baseValue: 345, emoji: '🍍', color: 'from-yellow-500 to-orange-400', rarity: 'rare' },
    { id: 'mango', name: 'Mango', nameZh: '芒果', baseValue: 289, emoji: '🥭', color: 'from-orange-400 to-yellow-500', rarity: 'rare' },
    { id: 'avocado', name: 'Avocado', nameZh: '牛油果', baseValue: 456, emoji: '🥑', color: 'from-green-500 to-green-600', rarity: 'rare' },
    { id: 'coconut', name: 'Coconut', nameZh: '椰子', baseValue: 578, emoji: '🥥', color: 'from-amber-400 to-amber-500', rarity: 'epic' },
    { id: 'peach', name: 'Peach', nameZh: '桃子', baseValue: 234, emoji: '🍑', color: 'from-pink-300 to-orange-400', rarity: 'uncommon' },
    { id: 'cherry', name: 'Cherry', nameZh: '樱桃', baseValue: 167, emoji: '🍒', color: 'from-red-500 to-red-600', rarity: 'uncommon' },
    { id: 'lemon', name: 'Lemon', nameZh: '柠檬', baseValue: 134, emoji: '🍋', color: 'from-yellow-300 to-yellow-400', rarity: 'common' },
    { id: 'orange', name: 'Orange', nameZh: '橙子', baseValue: 98, emoji: '🍊', color: 'from-orange-400 to-orange-500', rarity: 'common' },
    { id: 'kiwi', name: 'Kiwi', nameZh: '猕猴桃', baseValue: 267, emoji: '🥝', color: 'from-green-400 to-amber-400', rarity: 'rare' },
    { id: 'blueberry', name: 'Blueberry', nameZh: '蓝莓', baseValue: 189, emoji: '🫐', color: 'from-blue-400 to-purple-400', rarity: 'uncommon' },
    { id: 'carrot', name: 'Carrot', nameZh: '胡萝卜', baseValue: 67, emoji: '🥕', color: 'from-orange-500 to-orange-600', rarity: 'common' },
    { id: 'corn', name: 'Corn', nameZh: '玉米', baseValue: 89, emoji: '🌽', color: 'from-yellow-400 to-yellow-600', rarity: 'common' },
    { id: 'tomato', name: 'Tomato', nameZh: '番茄', baseValue: 76, emoji: '🍅', color: 'from-red-400 to-red-500', rarity: 'common' },
    { id: 'eggplant', name: 'Eggplant', nameZh: '茄子', baseValue: 123, emoji: '🍆', color: 'from-purple-500 to-purple-600', rarity: 'uncommon' },
    { id: 'pumpkin', name: 'Pumpkin', nameZh: '南瓜', baseValue: 189, emoji: '🎃', color: 'from-orange-400 to-orange-600', rarity: 'uncommon' },
    { id: 'dragonFruit', name: 'Dragon Fruit', nameZh: '火龙果', baseValue: 789, emoji: '🐉', color: 'from-pink-500 to-purple-500', rarity: 'legendary' },
    { id: 'starfruit', name: 'Starfruit', nameZh: '杨桃', baseValue: 567, emoji: '⭐', color: 'from-yellow-400 to-amber-500', rarity: 'epic' },
    { id: 'durian', name: 'Durian', nameZh: '榴莲', baseValue: 456, emoji: '🟤', color: 'from-amber-600 to-yellow-600', rarity: 'epic' },
    { id: 'papaya', name: 'Papaya', nameZh: '木瓜', baseValue: 234, emoji: '🟠', color: 'from-orange-300 to-orange-500', rarity: 'rare' },
  ];
  
  // Mutations data based on the original website
  export const mutations: Mutation[] = [
    // Growth Mutations (mutually exclusive)
    { id: 'default', name: 'Default', nameZh: '默认', multiplier: 1, category: 'growth' },
    { id: 'golden', name: 'Golden', nameZh: '金色', multiplier: 20, category: 'growth', exclusiveWith: ['rainbow'] },
    { id: 'rainbow', name: 'Rainbow', nameZh: '彩虹', multiplier: 50, category: 'growth', exclusiveWith: ['golden'] },
  
    // Temperature Mutations
    { id: 'wet', name: 'Wet', nameZh: '湿润', multiplier: 1, category: 'temperature' },
    { id: 'chilled', name: 'Chilled', nameZh: '冷却', multiplier: 1, category: 'temperature' },
    { id: 'frozen', name: 'Frozen', nameZh: '冰冻', multiplier: 9, category: 'temperature' },
  
    // Environmental Mutations
    { id: 'choc', name: 'Choc', nameZh: '巧克力', multiplier: 1, category: 'environmental' },
    { id: 'moonlit', name: 'Moonlit', nameZh: '月光', multiplier: 1, category: 'environmental' },
    { id: 'windstruck', name: 'Windstruck', nameZh: '风吹', multiplier: 1, category: 'environmental' },
    { id: 'pollinated', name: 'Pollinated', nameZh: '授粉', multiplier: 2, category: 'environmental' },
    { id: 'bloodlit', name: 'Bloodlit', nameZh: '血月', multiplier: 3, category: 'environmental' },
    { id: 'burnt', name: 'Burnt', nameZh: '燃烧', multiplier: 3, category: 'environmental' },
    { id: 'verdant', name: 'Verdant', nameZh: '翠绿', multiplier: 3, category: 'environmental' },
    { id: 'plasma', name: 'Plasma', nameZh: '等离子', multiplier: 4, category: 'environmental' },
    { id: 'honeyGlazed', name: 'Honey Glazed', nameZh: '蜂蜜', multiplier: 4, category: 'environmental' },
    { id: 'heavenly', name: 'Heavenly', nameZh: '天堂', multiplier: 4, category: 'environmental' },
    { id: 'twisted', name: 'Twisted', nameZh: '扭曲', multiplier: 4, category: 'environmental' },
    { id: 'cooked', name: 'Cooked', nameZh: '烹饪', multiplier: 9, category: 'environmental' },
    { id: 'paradisal', name: 'Paradisal', nameZh: '天堂', multiplier: 17, category: 'environmental' },
    { id: 'zombified', name: 'Zombified', nameZh: '僵尸', multiplier: 24, category: 'environmental' },
    { id: 'molten', name: 'Molten', nameZh: '熔化', multiplier: 24, category: 'environmental' },
    { id: 'sundried', name: 'Sundried', nameZh: '晒干', multiplier: 84, category: 'environmental' },
    { id: 'shocked', name: 'Shocked', nameZh: '电击', multiplier: 99, category: 'environmental' },
    { id: 'alienlike', name: 'Alienlike', nameZh: '外星', multiplier: 99, category: 'environmental' },
    { id: 'celestial', name: 'Celestial', nameZh: '天体', multiplier: 119, category: 'environmental' },
    { id: 'galactic', name: 'Galactic', nameZh: '银河', multiplier: 119, category: 'environmental' },
    { id: 'disco', name: 'Disco', nameZh: '迪斯科', multiplier: 124, category: 'environmental' },
    { id: 'meteoric', name: 'Meteoric', nameZh: '流星', multiplier: 124, category: 'environmental' },
    { id: 'voidtouched', name: 'Voidtouched', nameZh: '虚空', multiplier: 134, category: 'environmental' },
    { id: 'dawnbound', name: 'Dawnbound', nameZh: '黎明', multiplier: 149, category: 'environmental' },
  ];
  
  export interface CalculatorState {
    selectedCrop: Crop | null;
    weight: number;//kg
    quantity: number;
    friendBoost: number;
    growthMutation: string;
    temperatureMutation: string;
    environmentalMutation: string;
  }
  
  export const defaultCalculatorState: CalculatorState = {
    selectedCrop: null,
    weight: 1,
    quantity: 1,
    friendBoost: 0,
    growthMutation: 'default',
    temperatureMutation: 'wet',
    environmentalMutation: 'choc',
  };
  
  // Calculation functions
  export function calculateCropValue(state: CalculatorState): number {
    if (!state.selectedCrop) return 0;
  
    const growthMult = mutations.find(m => m.id === state.growthMutation)?.multiplier || 1;
    const tempMult = mutations.find(m => m.id === state.temperatureMutation)?.multiplier || 1;
    const envMult = mutations.find(m => m.id === state.environmentalMutation)?.multiplier || 1;
  
    const mutationMultiplier = growthMult * tempMult * envMult;
    const friendBoostMultiplier = 1 + (state.friendBoost / 100);
  
    const totalValue = state.selectedCrop.baseValue * state.weight * state.quantity * mutationMultiplier * friendBoostMultiplier;
  
    return Math.round(totalValue);
  }
  
  export function getTotalMultiplier(state: CalculatorState): number {
    const growthMult = mutations.find(m => m.id === state.growthMutation)?.multiplier || 1;
    const tempMult = mutations.find(m => m.id === state.temperatureMutation)?.multiplier || 1;
    const envMult = mutations.find(m => m.id === state.environmentalMutation)?.multiplier || 1;
    const friendBoostMult = 1 + (state.friendBoost / 100);
  
    return growthMult * tempMult * envMult * friendBoostMult;
  }
  
  export function getValuePerPound(crop: Crop): number {
    return crop.baseValue; // Base value is already per kg
  }
  
  export function getTopMutationCombos(crop: Crop, limit = 3) {
    const combos: Array<{
      growth: Mutation;
      temperature: Mutation;
      environmental: Mutation;
      totalMultiplier: number;
      value: number;
    }> = [];
  
    const growthMutations = mutations.filter(m => m.category === 'growth');
    const temperatureMutations = mutations.filter(m => m.category === 'temperature');
    const environmentalMutations = mutations.filter(m => m.category === 'environmental');
  
    for (const growth of growthMutations) {
      for (const temp of temperatureMutations) {
        for (const env of environmentalMutations) {
          const totalMultiplier = growth.multiplier * temp.multiplier * env.multiplier;
          const value = crop.baseValue * totalMultiplier;
  
          combos.push({
            growth,
            temperature: temp,
            environmental: env,
            totalMultiplier,
            value,
          });
        }
      }
    }
  
    return combos
      .sort((a, b) => b.totalMultiplier - a.totalMultiplier)
      .slice(0, limit);
  }
  