import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Router from './Router'
import Question1 from './Question1/Question1'
import Login from './Question2/Login'
import Dashboard from './Question2/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Router />} />
        <Route path="/Question1" element={<Question1 />} />
        <Route path="/Question2/Login" element={<Login />} />
        <Route path="/Question2/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Router />} />
      </Routes>
    </div>
  )
}

export default App
