import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className='bg-red-400'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App