import React, { useState } from 'react';
import { Search, Filter, Edit, Trash2, MoreVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function Doctors() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [data, setData] = useState([]);

  const doctors = async () => {
    const response = await fetch(`${BASE_URL}/doctor/all`);
    const data = await response.json();
    setData(data);

    console.log(data);
  }
  useEffect(() => {
    doctors();
  }, []);


  const filteredDoctors = data.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'All' || doc.specialization === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
      {/* Header and Filters */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">Doctors Directory</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage all registered doctors and staff</p>
          </div>
          <Link to="/dashboard/add-doctors" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Doctor
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search doctors by name..."
              className="pl-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-slate-400" />
            </div>
            <select
              className="pl-11 pr-8 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none transition-all cursor-pointer"
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}
            >
              <option value="All">All Specialties</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Orthopedist">Orthopedist</option>
              <option value="Dermatologist">Dermatologist</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
              <th className="py-4 px-6">Doctor Info</th>
              <th className="py-4 px-6">Specialty</th>
              <th className="py-4 px-6 text-center">Clinic</th>
              <th className="py-4 px-6 text-center">Timings</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {filteredDoctors.map(doctor => (
              <tr key={doctor._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors group">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white dark:ring-slate-800 shadow-sm flex-shrink-0">
                      <img src="https://i.pravatar.cc/150?u=1" alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{doctor.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{doctor.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                    {doctor.specialization}
                  </span>
                </td>
                <td className="py-4 px-6 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
                  <div className="truncate max-w-[150px] mx-auto" title={doctor.clinicName}>{doctor.clinicName}</div>
                  <div className="text-xs text-slate-500 font-normal mt-0.5">{doctor.city}</div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-emerald-500"></span>
                    {doctor.opdStartTime} - {doctor.opdEndTime}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredDoctors.length === 0 && (
              <tr>
                <td colSpan="5" className="py-12 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
                    <Search className="h-8 w-8 mb-3 opacity-50" />
                    <p className="text-base font-medium">No doctors found</p>
                    <p className="text-sm">Try adjusting your search or filters.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="border-t border-slate-100 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/80 flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">Showing <span className="font-semibold text-slate-700 dark:text-slate-300">{filteredDoctors.length}</span> results</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">Prev</button>
          <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Doctors;