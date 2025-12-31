import { User, Search, Filter } from 'lucide-react';
import { useState } from 'react';

interface Student {
  id: string;
  name: string;
  status: 'active' | 'silent' | 'hesitant';
  pauseDuration: number;
  responseCount: number;
  participationRate: number;
}

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    status: 'active',
    pauseDuration: 2.1,
    responseCount: 8,
    participationRate: 92,
  },
  {
    id: '2',
    name: 'Liam Chen',
    status: 'hesitant',
    pauseDuration: 4.5,
    responseCount: 4,
    participationRate: 58,
  },
  {
    id: '3',
    name: 'Sophia Martinez',
    status: 'active',
    pauseDuration: 2.3,
    responseCount: 7,
    participationRate: 88,
  },
  {
    id: '4',
    name: 'Noah Anderson',
    status: 'silent',
    pauseDuration: 6.2,
    responseCount: 1,
    participationRate: 15,
  },
  {
    id: '5',
    name: 'Olivia Taylor',
    status: 'active',
    pauseDuration: 2.4,
    responseCount: 9,
    participationRate: 95,
  },
  {
    id: '6',
    name: 'Ethan Brown',
    status: 'hesitant',
    pauseDuration: 4.8,
    responseCount: 3,
    participationRate: 45,
  },
  {
    id: '7',
    name: 'Ava Johnson',
    status: 'silent',
    pauseDuration: 5.9,
    responseCount: 2,
    participationRate: 22,
  },
  {
    id: '8',
    name: 'Mason Davis',
    status: 'active',
    pauseDuration: 2.2,
    responseCount: 8,
    participationRate: 90,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-cyan-50 border-cyan-200';
    case 'hesitant':
      return 'bg-blue-50 border-blue-200';
    case 'silent':
      return 'bg-blue-50 border-blue-200';
    default:
      return 'bg-blue-50 border-blue-200';
  }
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-cyan-100 text-cyan-800';
    case 'hesitant':
      return 'bg-blue-100 text-blue-800';
    case 'silent':
      return 'bg-blue-200 text-blue-700';
    default:
      return 'bg-blue-100 text-blue-800';
  }
};

const getStatusLabel = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-light text-blue-900 mb-2">Students</h2>
        <p className="text-blue-600">Detailed view of student participation and engagement</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-blue-50"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-blue-50 text-blue-900"
            >
              <option value="all">All statuses</option>
              <option value="active">Active</option>
              <option value="hesitant">Hesitant</option>
              <option value="silent">Silent</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className={`p-4 rounded-xl border transition-all hover:shadow-md ${getStatusColor(student.status)}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full border-2 border-blue-200">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900">{student.name}</h3>
                    <p className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${getStatusBadgeColor(student.status)}`}>
                      {getStatusLabel(student.status)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 gap-4 text-sm">
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <p className="text-blue-600 text-xs mb-1">Avg. Pause Duration</p>
                  <p className="font-semibold text-blue-900">{student.pauseDuration}s</p>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <p className="text-blue-600 text-xs mb-1">Responses</p>
                  <p className="font-semibold text-blue-900">{student.responseCount}</p>
                </div>
                <div className="bg-white bg-opacity-60 p-3 rounded-lg">
                  <p className="text-blue-600 text-xs mb-1">Participation</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${student.participationRate}%` }}
                      />
                    </div>
                    <span className="font-semibold text-blue-900 text-xs w-10">
                      {student.participationRate}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
