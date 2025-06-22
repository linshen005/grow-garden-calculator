// 单个作物卡片组件：用于展示和选择作物
import type { Crop } from '../lib/data';

interface CropCardProps {
  crop: Crop;
  selected: boolean;
  onClick: () => void;
}

export default function CropCard({ crop, selected, onClick }: CropCardProps) {
  return (
    <button
      className={`border rounded p-4 w-full text-left transition shadow-sm ${selected ? 'border-green-500 bg-green-50' : 'hover:border-green-300'}`}
      onClick={onClick}
      type="button"
    >
      <div className="font-bold text-lg mb-1">{crop.name}</div>
      <div className="text-sm text-gray-500">基础单价：${crop.baseValue}/kg</div>
    </button>
  );
} 