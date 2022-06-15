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
  TextField,
  Typography,
} from '@mui/material'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const Filter = () => {
  const initialValues = {
    time: '2022-06-01T00:00',
    text: 'text',
    select: '1',
  }
  const validationSchema = Yup.object({
    time: Yup.string().required('required'),
    text: Yup.string().required('required'),
    select: Yup.string().required('required'),
  })
  const onSubmit = ({ time, text, select }: any) => {
    console.log('time: ', time)
    console.log('text: ', text)
    console.log('select: ', select)
  }

  return (
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary sx={{ backgroundColor: 'lightcyan' }} expandIcon={<ArrowDropDown />}>
        <Typography>搜尋設定</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '1rem' }}>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Field name="time">
                  {({ field, form, meta }: any) => {
                    let error = false
                    let helperText = ''
                    if (meta && meta.touched && meta.error) {
                      error = true
                      helperText = meta.error
                    }
                    return (
                      <TextField {...field} error={error} helperText={helperText} label="時間範圍選擇器" type="datetime-local" fullWidth />
                    )
                  }}
                </Field>
              </Grid>

              <Grid item xs={5}>
                <Field name="text">
                  {({ field, form, meta }: any) => {
                    let error = false
                    let helperText = ''
                    if (meta && meta.touched && meta.error) {
                      error = true
                      helperText = meta.error
                    }
                    return <TextField {...field} error={error} helperText={helperText} label="文字輸入框" variant="outlined" fullWidth />
                  }}
                </Field>
              </Grid>

              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select">選單</InputLabel>
                  <Field name="select">
                    {({ field, form, meta }: any) => {
                      let error = false
                      if (meta && meta.touched && meta.error) {
                        error = true
                      }
                      return (
                        <Select labelId="demo-select" {...field} error={error} label="選單">
                          <MenuItem value={1}>01</MenuItem>
                          <MenuItem value={2}>02</MenuItem>
                          <MenuItem value={3}>03</MenuItem>
                        </Select>
                      )
                    }}
                  </Field>
                </FormControl>
              </Grid>
              <Grid container item justifyContent="flex-end">
                <Button variant="contained" type="submit">
                  送出按鈕
                </Button>
                <Button sx={{ marginLeft: '0.5rem', backgroundColor: 'lightcyan', color: 'black' }} variant="contained" type="reset">
                  重設按鈕
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </AccordionDetails>
    </Accordion>
  )
}

export default Filter
