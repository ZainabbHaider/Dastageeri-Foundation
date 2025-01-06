import { DollarSign } from 'lucide-react';

interface AssetInputProps {
  label: string;
  value: number;
  onChange: (value: string) => void;
}

export default function AssetInput({ label, value, onChange }: AssetInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 capitalize">
        {label.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="number"
          className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 pr-12 border-dark-300 rounded-md"
          placeholder="0.00"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}