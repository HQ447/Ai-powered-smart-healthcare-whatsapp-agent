import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  UserPlus, 
  Settings, 
  LogOut,
  X,
  Stethoscope
} from 'lucide-react';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const navigation = [
    { name: 'Analytics', href: '/dashboard', icon: BarChart3, exact: true },
    { name: 'Doctors List', href: '/dashboard/doctors', icon: Users },
    { name: 'Add Doctor', href: '/dashboard/add-doctors', icon: UserPlus },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200 dark:border-slate-700 bg-teal-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
                <Stethoscope className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">System Admin</span>
          </div>
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-white/20 transition-colors focus:outline-none"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col flex-1 h-[calc(100vh-5rem)] overflow-y-auto py-6">
            <div className="px-6 pb-6 mb-6 border-b border-slate-100 dark:border-slate-700 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 border-2 border-white dark:border-slate-600 shadow-sm overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 dark:text-white truncate">Administrator</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">admin@smarthealth.org</p>
                </div>
            </div>

          <nav className="flex-1 px-4 space-y-1.5">
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>
            {navigation.map((item) => {
              const isActive = item.exact 
                ? location.pathname === item.href || location.pathname === item.href + '/' 
                : location.pathname.startsWith(item.href);
              
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`h-5 w-5 transition-colors ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          <div className="px-6 mt-auto">
            <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-colors group">
              <LogOut className="h-5 w-5 text-slate-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;