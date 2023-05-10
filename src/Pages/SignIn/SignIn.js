import React from 'react'
import Background from '../../Images/SignIn/SignInImg.png'
import { Grid, TextField, InputAdornment, ThemeProvider } from '@mui/material'
import { VpnKey } from '@mui/icons-material'
import './SignIn.css'
import { PTypography } from '../../Components/PersianComponent'
import { PRoundButton } from '../../Components/PersianComponent'
import Link from '@mui/material/Link'
import { theme } from '../../Theme/ThemeGenerator'
import { useState, useEffect } from 'react'
import history from '../../history'
import Navbar from '../../Components/Navbar/Navbar'
import { Create } from '@mui/icons-material'

function SignIn() {
  const initialFormData = Object.freeze({
    username: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData)
  const [flagData, setFlagData] = useState(false)
  const [errorData, updateErrorData] = useState(initialFormData)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    console.log('access_token Come')
    console.log(localStorage.getItem('access_token'))
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: 'JWT ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
      },
    }
    fetch('http://127.0.0.1:8000/user/login/', requestOptions)
      .then((response) => {
        console.log(localStorage.getItem('access_token'))
        if (response.status != 401) {
          history.push('/HomePage')  
        }
      })
      .catch((err) => {})
  }, [flagData])

  useEffect(() => {
    updateErrorData(initialFormData)
    console.log(errorData)
  }, [refresh])

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
    updateErrorData({
      ...errorData,
      [e.target.name]: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    if (refresh) setRefresh(false)
    else setRefresh(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    }
    fetch('http://127.0.0.1:8000/user/refresh-token/', requestOptions)
      .then((response) => {
        if (response.status == 200) {
          console.log('response')
          response.json().then((data) => {
            console.log(data)
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
            setFlagData(flagData ? false : true)
          })

          //console.log(data)
        } else {
          throw response
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          alert('Your email or password is incorrect!')
        }
        err.text().then((errorMessage) => {
          const errors = JSON.parse(errorMessage)
          console.log('e ' + errors.username)
          if (errors.username !== undefined) {
            updateErrorData({
              ...errorData,
              username: errors.username,
            })
            return
          }

          if (errors.password !== undefined) {
            updateErrorData({
              ...errorData,
              password: errors.password,
            })
            return
          }
        })
      })
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar
        SearchOption={true}
        TicketOption={false}
        CartOption={false}
        DrawerOption={false}
        AuthorizationOption={false}
      />
        <Grid
          container
          style={{ minHeight: '100vh' }}
          sx={{ pl: { sm: 20, xs: 0 }, pr: { sm: 20, xs: 0 } }}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={Background}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              alt='Background'
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems='center'
            direction='column'
            justify='space-between'
            className='centerElement'
          >
            <div />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
                minWidth: 300,
              }}
            >
            <TextField
              id='name'
              name='name'
              variant='standard'
              label='Username'
              margin='normal'
              helperText={errorData.username != '' ? errorData.username : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <Create/>{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
              <TextField
              variant='standard'
              type='password'
              name='password'
              label='Password'
              margin='normal'
              helperText={errorData.password != '' ? errorData.password : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <VpnKey />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: 400,
                  minWidth: 300,
                  height: 20
                }}
              />
              <PRoundButton variant='contained' alignContent = 'center'>
                <Link href='#' underline='none' color='white' onClick={handleSubmit}>
                  <PTypography variant='h6' color={theme.palette.text}>
                    LogIn
                  </PTypography>
                </Link>
              </PRoundButton>
              <div style={{ height: 30 }} className='Buttons' />
              <div className='divSignUp'>
                <Link href='/signup' underline='none' color='primary'>
                  <PTypography variant='h6' color={theme.palette.text}>
                    SIGN UP
                  </PTypography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

export default SignIn