import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, Stethoscope } from 'lucide-react'

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden font-sans">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className='flex-1 flex flex-col min-w-0'>
                {/* Mobile header */}
                <header className="bg-white dark:bg-slate-800 shadow-sm lg:hidden border-b border-slate-200 dark:border-slate-700 z-10 transition-colors duration-300">
                    <div className="px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                                <Stethoscope className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">SmartHealth</span>
                        </div>
                        <button 
                            onClick={() => setSidebarOpen(true)} 
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 right-0 h-64 bg-teal-600 dark:bg-slate-800 pointer-events-none rounded-b-3xl transform -translate-y-32"></div>
                    
                    <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full z-10">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout