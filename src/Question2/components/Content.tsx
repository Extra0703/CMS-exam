import { Box, Toolbar } from '@mui/material'
import React from 'react'
import DataTable from './DataTable'
import Filter from './Filter'

type Props = {
  asideWidth: number
}

const Content = (props: Props) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.asideWidth}px)` } }}>
      <Toolbar />
      <Filter />
      <DataTable />
    </Box>
  )
}

export default Content
