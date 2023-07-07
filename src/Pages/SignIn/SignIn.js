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
import api from "../../api";

function SignIn() {
  const initialFormData = Object.freeze({
    username: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData)
  const [flagData, setFlagData] = useState(false)
  const [errorData, setErrorData] = useState('')

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
    setErrorData({
      ...errorData,
      [e.target.name]: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
        !formData.username ||
        !formData.password
    ) {
      setErrorData('Please fill all the required fields.');
      return;
    }

    const loginData = {
      'username': formData.username,
      'password': formData.password
    }

    api.post('/users/login/', loginData)
      .then((response) => {
        localStorage.setItem('token', response.data.token)

        window.location.href = "/"
      })
      .catch((err) => {
        alert('Your email or password is incorrect!')
      })
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar
        SearchOption={false}
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
              id='username'
              name='username'
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