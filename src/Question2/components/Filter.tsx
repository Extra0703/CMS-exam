import { ArrowDropDown } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const Filter = () => {
  const [select, setSelect] = useState('')

  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string)
  }

  return (
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary sx={{ backgroundColor: 'lightcyan' }} expandIcon={<ArrowDropDown />}>
        <Typography>搜尋設定</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid xs={12} p={2}>
          <TextField id="datetime-start" label="時間範圍選擇器" type="datetime-local" defaultValue="2022-06-01T00:00" />
          <TextField id="datetime-end" label="" type="datetime-local" defaultValue="2022-06-30T00:00" />

          <FormControl sx={{ width: '100px', marginLeft: '1rem' }}>
            <InputLabel id="demo-select">選單</InputLabel>
            <Select labelId="demo-select" id="demo-simple-select" value={select} label="Age" onChange={handleSelectChange}>
              <MenuItem value={1}>01</MenuItem>
              <MenuItem value={2}>02</MenuItem>
              <MenuItem value={3}>03</MenuItem>
            </Select>
          </FormControl>

          <TextField sx={{ marginLeft: '1rem' }} id="outlined-basic" label="文字輸入框" variant="outlined" />
        </Grid>
        <Grid xs={12}>
          <Button variant="contained">送出按鈕</Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Filter
