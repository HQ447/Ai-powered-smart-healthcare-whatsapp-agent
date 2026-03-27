import React, { useState, useEffect } from 'react';
import { Moon, Sun, Monitor, Shield, Key, Mail, User, Save, Bell } from 'lucide-react';

function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  );

  useEffect(() => {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">System Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage platform preferences and admin configurations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - General Settings */}
        <div className="lg:col-span-1 space-y-6">
            
            {/* Theme Settings */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Appearance</h3>
                
                <div className="space-y-3">
                    <button 
                        onClick={() => toggleTheme('light')}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border ${theme === 'light' ? 'border-teal-500 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'} transition-colors`}
                    >
                        <div className="flex items-center gap-3">
                            <Sun className="w-5 h-5" />
                            <span className="font-medium text-sm">Light Mode</span>
                        </div>
                        {theme === 'light' && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                    </button>
                    
                    <button 
                        onClick={() => toggleTheme('dark')}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border ${theme === 'dark' ? 'border-teal-500 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'} transition-colors`}
                    >
                        <div className="flex items-center gap-3">
                            <Moon className="w-5 h-5" />
                            <span className="font-medium text-sm">Dark Mode</span>
                        </div>
                        {theme === 'dark' && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                    </button>

                    <button 
                        onClick={() => toggleTheme('system')}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border ${theme === 'system' ? 'border-teal-500 bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'} transition-colors`}
                    >
                        <div className="flex items-center gap-3">
                            <Monitor className="w-5 h-5" />
                            <span className="font-medium text-sm">System Default</span>
                        </div>
                        {theme === 'system' && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                    </button>
                </div>
            </div>

            {/* Application Information */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">System Identity</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Platform Name</label>
                        <input type="text" defaultValue="Smart Health Care System" className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Support Email</label>
                        <input type="email" defaultValue="support@smarthealth.org" className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                    </div>
                    <button className="w-full mt-2 py-2.5 text-sm font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 hover:bg-teal-100 dark:hover:bg-teal-500/20 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <Save className="w-4 h-4" /> Save Identity
                    </button>
                </div>
            </div>

        </div>

        {/* Right Column - Admin Settings */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Admin Profile */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
                <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                    <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Admin Profile</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-2"><User className="w-4 h-4 text-slate-400" /> Full Name</label>
                        <input type="text" defaultValue="Super Admin" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400" /> Email Address</label>
                        <input type="email" defaultValue="admin@smarthealth.org" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-2"><Key className="w-4 h-4 text-slate-400" /> Current Password</label>
                        <input type="password" placeholder="Enter current password to make changes" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                        <button className="px-6 py-2.5 text-sm font-medium text-white bg-slate-800 dark:bg-teal-600 rounded-lg hover:bg-slate-900 dark:hover:bg-teal-700 transition-colors shadow-sm">
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Add New Admin */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Shield className="w-32 h-32" />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                        <Shield className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Register New Admin</h3>
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 rounded-full border border-red-200 dark:border-red-500/20">High Privilege</span>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xl">
                        Adding a new administrator requires the master system secret code. Once added, the new admin will have full access to all healthcare directories and settings.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">New Admin Email</label>
                            <input type="email" placeholder="new.admin@example.com" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Temporary Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                        </div>
                        <div className="md:col-span-2 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-2 text-red-600 dark:text-red-400">
                                <Key className="w-4 h-4" /> Master Secret Code
                            </label>
                            <input type="password" placeholder="Enter system secret code to authorize" className="w-full px-3 py-2.5 rounded-lg border border-red-200 dark:border-red-900/50 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-slate-800" />
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-md flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Authorize & Create Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;