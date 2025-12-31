import { Outlet, Link, useLocation } from 'react-router-dom';
import { Ear, LayoutDashboard, Users, BookOpen, Clock } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/students', label: 'Students', icon: Users },
    { path: '/topics', label: 'Topics', icon: BookOpen },
    { path: '/session', label: 'Session', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
              <Ear className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-blue-900">
                Layer-1 Classroom Listener
              </h1>
              <p className="text-sm text-blue-600">Early confusion detection system</p>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap ${
                  isActive(path)
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'text-blue-600 hover:bg-blue-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
