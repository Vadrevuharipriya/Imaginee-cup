import { BookOpen } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  hesitationLevel: 'low' | 'moderate' | 'high';
  hesitationPercentage: number;
}

const mockTopics: Topic[] = [
  { id: '1', name: 'Quadratic Equations', hesitationLevel: 'low', hesitationPercentage: 15 },
  { id: '2', name: 'Factoring Polynomials', hesitationLevel: 'moderate', hesitationPercentage: 45 },
  { id: '3', name: 'Graphing Functions', hesitationLevel: 'low', hesitationPercentage: 20 },
  { id: '4', name: 'Systems of Equations', hesitationLevel: 'high', hesitationPercentage: 70 },
  { id: '5', name: 'Logarithmic Functions', hesitationLevel: 'moderate', hesitationPercentage: 50 },
];

const getHesitationColor = (level: string) => {
  switch (level) {
    case 'low':
      return 'bg-cyan-400';
    case 'moderate':
      return 'bg-blue-400';
    case 'high':
      return 'bg-blue-600';
    default:
      return 'bg-blue-500';
  }
};

const getHesitationLabel = (level: string) => {
  switch (level) {
    case 'low':
      return 'Low hesitation';
    case 'moderate':
      return 'Moderate hesitation';
    case 'high':
      return 'High hesitation';
    default:
      return level;
  }
};

export default function TopicOverview() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-blue-900">Topic Overview</h2>
      </div>

      <div className="space-y-5">
        {mockTopics.map((topic) => (
          <div key={topic.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-blue-900">{topic.name}</h3>
              <span className="text-xs text-blue-600">
                {getHesitationLabel(topic.hesitationLevel)}
              </span>
            </div>

            <div className="relative">
              <div className="h-3 bg-blue-50 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getHesitationColor(
                    topic.hesitationLevel
                  )} rounded-full transition-all duration-500`}
                  style={{ width: `${topic.hesitationPercentage}%` }}
                />
              </div>
              <span className="absolute right-0 -top-0.5 text-xs font-medium text-blue-700">
                {topic.hesitationPercentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
