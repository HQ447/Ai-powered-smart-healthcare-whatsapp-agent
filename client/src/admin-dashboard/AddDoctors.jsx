import React, { useState } from 'react';
import { Upload, User, Mail, Phone, MapPin, Award, Stethoscope, Briefcase } from 'lucide-react';

function AddDoctors() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    specialty: '', experience: '', address: '', biodata: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding new doctor:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Add New Doctor</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Register a new healthcare professional into the system</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        {/* Abstract Header Decorative */}
        <div className="h-12 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 dark:opacity-40"></div>
        
        <div className="px-8 pb-8 pt-4">
            
            {/* Profile Photo Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 -mt-10">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 p-1 shadow-md">
                        <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-slate-400 cursor-pointer overflow-hidden transition-colors group-hover:border-teal-500 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20">
                            <Upload className="w-6 h-6 mb-1" />
                            <span className="text-[10px] font-medium uppercase tracking-wider">Upload</span>
                        </div>
                    </div>
                </div>
                <div className="text-center sm:text-left pt-6">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Profile Photo</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Personal Info */}
              <div className="md:col-span-2">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-teal-500" /> Personal Information
                  </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">First Name</label>
                <div className="relative">
                    <input type="text" name="firstName" required className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="John" onChange={handleChange} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Last Name</label>
                <input type="text" name="lastName" required className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Doe" onChange={handleChange} />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-slate-400" />
                    </div>
                    <input type="email" name="email" required className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="doctor@example.com" onChange={handleChange} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <input type="tel" name="phone" required className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" onChange={handleChange} />
                </div>
              </div>

              {/* Professional Info */}
              <div className="md:col-span-2 mt-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-700 pb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-500" /> Professional Details
                  </h4>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Specialty</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Stethoscope className="h-4 w-4 text-slate-400" />
                    </div>
                    <select name="specialty" className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none transition-all cursor-pointer" onChange={handleChange}>
                        <option value="">Select Specialty</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Orthopedist">Orthopedist</option>
                    </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Years of Experience</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Award className="h-4 w-4 text-slate-400" />
                    </div>
                    <input type="number" name="experience" min="0" className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="e.g. 5" onChange={handleChange} />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Clinic Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                        <MapPin className="h-4 w-4 text-slate-400" />
                    </div>
                    <textarea name="address" rows="2" className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none" placeholder="123 Health Ave, Medical District..." onChange={handleChange} />
                </div>
              </div>

              <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Short Biodata</label>
                  <textarea name="biodata" rows="4" className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-y" placeholder="Brief background about the doctor..." onChange={handleChange} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-end gap-4">
                <button type="button" className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                    Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-lg hover:bg-teal-700 transition-colors shadow-md flex items-center gap-2">
                   Save Doctor
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default AddDoctors;