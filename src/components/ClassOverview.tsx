import { Circle, User } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  status: 'active' | 'silent' | 'hesitant';
}

const mockStudents: Student[] = [
  { id: '1', name: 'Emma Wilson', status: 'active' },
  { id: '2', name: 'Liam Chen', status: 'hesitant' },
  { id: '3', name: 'Sophia Martinez', status: 'active' },
  { id: '4', name: 'Noah Anderson', status: 'silent' },
  { id: '5', name: 'Olivia Taylor', status: 'active' },
  { id: '6', name: 'Ethan Brown', status: 'hesitant' },
  { id: '7', name: 'Ava Johnson', status: 'silent' },
  { id: '8', name: 'Mason Davis', status: 'active' },
  { id: '9', name: 'Isabella Lee', status: 'hesitant' },
  { id: '10', name: 'Lucas White', status: 'active' },
  { id: '11', name: 'Mia Garcia', status: 'silent' },
  { id: '12', name: 'James Rodriguez', status: 'active' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'text-cyan-600 bg-cyan-50';
    case 'hesitant':
      return 'text-blue-600 bg-blue-50';
    case 'silent':
      return 'text-blue-400 bg-blue-50';
    default:
      return 'text-blue-500 bg-blue-50';
  }
};

const getStatusDotColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'fill-cyan-500';
    case 'hesitant':
      return 'fill-blue-500';
    case 'silent':
      return 'fill-blue-300';
    default:
      return 'fill-blue-400';
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Active';
    case 'hesitant':
      return 'Hesitant';
    case 'silent':
      return 'Silent';
    default:
      return status;
  }
};

export default function ClassOverview() {
  const silentCount = mockStudents.filter((s) => s.status === 'silent').length;
  const hesitantCount = mockStudents.filter((s) => s.status === 'hesitant').length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-blue-900">Class Overview</h2>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 text-blue-600">
            <Circle className="w-3 h-3 fill-blue-300" />
            <span>{silentCount} Silent</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <Circle className="w-3 h-3 fill-blue-500" />
            <span>{hesitantCount} Hesitant</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {mockStudents.map((student) => (
          <div
            key={student.id}
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md transition-shadow"
          >
            <div className="bg-white p-2 rounded-full border-2 border-blue-200">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-blue-900 truncate">
                {student.name}
              </p>
            </div>
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                student.status
              )}`}
            >
              <Circle className={`w-2 h-2 ${getStatusDotColor(student.status)}`} />
              {getStatusLabel(student.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
