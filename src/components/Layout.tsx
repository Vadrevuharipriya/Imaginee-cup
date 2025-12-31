import { Outlet, Link, useLocation } from 'react-router-dom';
import { Ear, LayoutDashboard, Users, BookOpen, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/students', label: 'Students', icon: Users },
    { path: '/topics', label: 'Topics', icon: BookOpen },
    { path: '/session', label: 'Session', icon: Clock },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-white border-r border-blue-100 shadow-sm transform transition-transform duration-200
        ${open ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static`}
      >
        <div className="p-6 flex items-center gap-3 border-b">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
            <Ear className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-base font-semibold text-blue-900">
              Classroom Listener
            </h1>
            <p className="text-xs text-blue-600">Layer-1 System</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${
                isActive(path)
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-blue-700 hover:bg-blue-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-30 bg-white border-b px-4 py-3 flex items-center gap-3">
          <button onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6 text-blue-700" />
          </button>
          <span className="font-semibold text-blue-900">Classroom Listener</span>
        </header>

        <main className="flex-1 px-6 py-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
