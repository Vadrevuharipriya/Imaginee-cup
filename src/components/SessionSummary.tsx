import { Clock, MessageSquare, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtitle: string;
  color: string;
}

function MetricCard({ icon, label, value, subtitle, color }: MetricCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
      <div className="flex items-start gap-3">
        <div className={`${color} p-2 rounded-lg`}>{icon}</div>
        <div className="flex-1">
          <p className="text-xs text-blue-600 mb-1">{label}</p>
          <p className="text-2xl font-semibold text-blue-900 mb-1">{value}</p>
          <p className="text-xs text-blue-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function SessionSummary() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Session Summary</h2>

        <div className="space-y-4">
          <MetricCard
            icon={<Clock className="w-5 h-5 text-white" />}
            label="Average Pause Duration"
            value="3.2s"
            subtitle="Within normal range"
            color="bg-gradient-to-br from-blue-500 to-cyan-500"
          />

          <MetricCard
            icon={<MessageSquare className="w-5 h-5 text-white" />}
            label="Response Frequency"
            value="24/hour"
            subtitle="Good engagement"
            color="bg-gradient-to-br from-cyan-500 to-blue-400"
          />

          <MetricCard
            icon={<TrendingUp className="w-5 h-5 text-white" />}
            label="Class Confidence"
            value="72%"
            subtitle="Above average"
            color="bg-gradient-to-br from-blue-600 to-blue-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="font-semibold mb-2">Quick Insight</h3>
        <p className="text-sm text-blue-50 leading-relaxed">
          3 students showing hesitation on Systems of Equations. Consider reviewing this topic.
        </p>
      </div>
    </div>
  );
}
