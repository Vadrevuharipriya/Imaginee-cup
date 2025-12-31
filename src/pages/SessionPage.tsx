import { Clock, MessageSquare, TrendingUp, Users, BarChart3 } from 'lucide-react';

interface SessionMetric {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  color: string;
}

export default function SessionPage() {
  const metrics: SessionMetric[] = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Average Pause Duration',
      value: '3.2s',
      change: '+0.4s from last class',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: 'Response Frequency',
      value: '24/hour',
      change: '+2 responses',
      color: 'from-cyan-500 to-blue-400',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Class Confidence',
      value: '72%',
      change: '+5% improvement',
      color: 'from-blue-600 to-blue-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Active Participants',
      value: '9/12',
      change: '75% engagement',
      color: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-blue-900 mb-2">Session Summary</h2>
        <p className="text-blue-600">Current class session metrics and performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`bg-gradient-to-br ${metric.color} p-3 rounded-lg`}>
                <div className="text-white">{metric.icon}</div>
              </div>
            </div>

            <p className="text-sm text-blue-600 mb-1">{metric.label}</p>
            <p className="text-3xl font-bold text-blue-900 mb-2">{metric.value}</p>
            <p className="text-sm text-blue-500">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900">Student Status Breakdown</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Active</span>
                <span className="text-sm font-semibold text-cyan-600">9 students</span>
              </div>
              <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-cyan-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Hesitant</span>
                <span className="text-sm font-semibold text-blue-600">2 students</span>
              </div>
              <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-1/6 bg-gradient-to-r from-blue-400 to-blue-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Silent</span>
                <span className="text-sm font-semibold text-blue-400">1 student</span>
              </div>
              <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-1/12 bg-gradient-to-r from-blue-300 to-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-cyan-200 font-bold">•</span>
              <span className="text-sm leading-relaxed">
                3 students showing hesitation on Systems of Equations. Consider reviewing this topic.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-200 font-bold">•</span>
              <span className="text-sm leading-relaxed">
                Overall class confidence is 72%, which is above the class average.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-200 font-bold">•</span>
              <span className="text-sm leading-relaxed">
                Pause durations have increased slightly, indicating deeper thinking patterns.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-200 font-bold">•</span>
              <span className="text-sm leading-relaxed">
                Good engagement with 75% of students actively participating.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
