import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Question1 from './Question1/Question1'
import Question2 from './Question2/Question2'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Question1" element={<Question1 />} />
        <Route path="/Question2" element={<Question2 />} />
      </Routes>
    </div>
  )
}

export default App
