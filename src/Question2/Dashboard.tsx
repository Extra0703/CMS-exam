import { Box } from '@mui/material'
import React from 'react'
import Aside from './components/Aside'
import Content from './components/Content'
import Header from './components/Header'

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Aside asideWidth={240} />
      <Header asideWidth={240} />
      <Content asideWidth={240} />
    </Box>
  )
}

export default Dashboard
