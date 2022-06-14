import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#84bc7d',
  },
  container: {
    width: '500px',
    padding: '2rem',
  },
})

const Login = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const initialValues = {
    account: '',
    password: '',
  }
  const validationSchema = Yup.object({
    account: Yup.string().required('required'),
    password: Yup.string().required('required'),
  })
  const onSubmit = ({ account, password }: any) => {
    console.log('account: ', account)
    console.log('password: ', password)
    navigate('/Question2/Dashboard')
  }

  return (
    <div className={classes.background}>
      <Card className={classes.container}>
        <Typography variant="h4">管理系統</Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <CardContent>
              <Field name="account">
                {({ field, form, meta }: any) => {
                  let error = false
                  let helperText = ''
                  if (meta && meta.touched && meta.error) {
                    error = true
                    helperText = meta.error
                  }
                  return <TextField {...field} error={error} helperText={helperText} label="帳號" variant="standard" fullWidth />
                }}
              </Field>
              <Field name="password">
                {({ field, form, meta }: any) => {
                  let error = false
                  let helperText = ''
                  if (meta && meta.touched && meta.error) {
                    error = true
                    helperText = meta.error
                  }
                  return (
                    <TextField {...field} error={error} helperText={helperText} label="密碼" variant="standard" type="password" fullWidth />
                  )
                }}
              </Field>
            </CardContent>
            <CardActions>
              <Button variant="contained" type="submit" fullWidth>
                登入
              </Button>
            </CardActions>
          </Form>
        </Formik>
      </Card>
    </div>
  )
}

export default Login
