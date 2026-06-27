import { FiTrendingUp } from 'react-icons/fi';

export default function StatsCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
      <div className={`${color} p-3 rounded-full text-2xl`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}