import { BookOpen, TrendingDown } from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  hesitationLevel: 'low' | 'moderate' | 'high';
  hesitationPercentage: number;
  affectedStudents: number;
  avgPauseDuration: number;
  confidenceScore: number;
}

const mockTopics: Topic[] = [
  {
    id: '1',
    name: 'Quadratic Equations',
    hesitationLevel: 'low',
    hesitationPercentage: 15,
    affectedStudents: 2,
    avgPauseDuration: 2.4,
    confidenceScore: 85,
  },
  {
    id: '2',
    name: 'Factoring Polynomials',
    hesitationLevel: 'moderate',
    hesitationPercentage: 45,
    affectedStudents: 5,
    avgPauseDuration: 4.1,
    confidenceScore: 68,
  },
  {
    id: '3',
    name: 'Graphing Functions',
    hesitationLevel: 'low',
    hesitationPercentage: 20,
    affectedStudents: 2,
    avgPauseDuration: 2.7,
    confidenceScore: 82,
  },
  {
    id: '4',
    name: 'Systems of Equations',
    hesitationLevel: 'high',
    hesitationPercentage: 70,
    affectedStudents: 8,
    avgPauseDuration: 5.3,
    confidenceScore: 45,
  },
  {
    id: '5',
    name: 'Logarithmic Functions',
    hesitationLevel: 'moderate',
    hesitationPercentage: 50,
    affectedStudents: 6,
    avgPauseDuration: 4.5,
    confidenceScore: 62,
  },
];

const getHesitationColor = (level: string) => {
  switch (level) {
    case 'low':
      return 'bg-cyan-50 border-cyan-200';
    case 'moderate':
      return 'bg-blue-50 border-blue-200';
    case 'high':
      return 'bg-blue-100 border-blue-300';
    default:
      return 'bg-blue-50 border-blue-200';
  }
};

const getBarColor = (level: string) => {
  switch (level) {
    case 'low':
      return 'bg-gradient-to-r from-cyan-400 to-cyan-500';
    case 'moderate':
      return 'bg-gradient-to-r from-blue-400 to-blue-500';
    case 'high':
      return 'bg-gradient-to-r from-blue-600 to-blue-700';
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

export default function TopicsPage() {
  const sortedTopics = [...mockTopics].sort(
    (a, b) => b.hesitationPercentage - a.hesitationPercentage
  );

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-blue-900 mb-2">Topics</h2>
        <p className="text-blue-600">Student hesitation and confidence by topic</p>
      </div>

      <div className="space-y-4">
        {sortedTopics.map((topic) => (
          <div
            key={topic.id}
            className={`bg-white rounded-2xl shadow-lg border p-6 transition-all hover:shadow-xl ${getHesitationColor(topic.hesitationLevel)}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{topic.name}</h3>
                  <p className="text-sm text-blue-600">{getHesitationLabel(topic.hesitationLevel)}</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-900">{topic.hesitationPercentage}%</span>
            </div>

            <div className="mb-5">
              <div className="h-4 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getBarColor(topic.hesitationLevel)} transition-all duration-500`}
                  style={{ width: `${topic.hesitationPercentage}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-70 p-3 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-600 mb-1">Affected Students</p>
                <p className="text-xl font-semibold text-blue-900">{topic.affectedStudents}</p>
              </div>
              <div className="bg-white bg-opacity-70 p-3 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-600 mb-1">Avg. Pause Duration</p>
                <p className="text-xl font-semibold text-blue-900">{topic.avgPauseDuration}s</p>
              </div>
              <div className="bg-white bg-opacity-70 p-3 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-600 mb-1">Confidence Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-blue-900">{topic.confidenceScore}%</span>
                  {topic.confidenceScore < 60 && (
                    <TrendingDown className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
