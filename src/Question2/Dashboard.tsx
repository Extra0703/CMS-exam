import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aside from './components/Aside'
import Content from './components/Content'
import Header from './components/Header'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Aside asideWidth={240} />
      <Header asideWidth={240} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}>
        <Toolbar />
        <Routes>
          <Route path="a1" element={<h1>a1</h1>} />
          <Route path="a2" element={<h1>a2</h1>} />
          <Route path="b1" element={<h1>b1</h1>} />
          <Route path="b2" element={<h1>b2</h1>} />
          <Route path="c1" element={<h1>c1</h1>} />
          <Route path="c2" element={<h1>c2</h1>} />
          <Route path="d1" element={<h1>d1</h1>} />
          <Route path="d2" element={<h1>d2</h1>} />
          <Route path="*" element={<Content />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default Dashboard
