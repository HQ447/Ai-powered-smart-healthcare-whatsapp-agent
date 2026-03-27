import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import DashboardLayout from './admin-dashboard/DashboardLayout'
import Analytics from './admin-dashboard/Analytics'
import Doctors from './admin-dashboard/Doctors'
import AddDoctors from './admin-dashboard/AddDoctors'
import Settings from './admin-dashboard/Settings'

function App() {
  return (
    <div className='font-sans text-gray-900 antialiased'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />} >
          <Route index element={<Analytics />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='add-doctors' element={<AddDoctors />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App