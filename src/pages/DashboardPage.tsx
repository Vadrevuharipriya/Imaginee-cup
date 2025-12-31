import ClassOverview from '../components/ClassOverview';
import TopicOverview from '../components/TopicOverview';
import SessionSummary from '../components/SessionSummary';

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-blue-900 mb-2">
          Classroom Insights
        </h2>
        <p className="text-blue-600">
          Real-time participation and confidence monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ClassOverview />
        </div>

        <div className="space-y-6">
          <SessionSummary />
        </div>
      </div>

      <div>
        <TopicOverview />
      </div>
    </div>
  );
}
