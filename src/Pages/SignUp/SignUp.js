import React, { useState } from 'react'
import Background from '../../Images/SignUp/SignUpImg.png'
import { Grid, TextField, InputAdornment } from '@mui/material'
import { AccountCircle, VpnKey, EmailSharp, Create } from '@mui/icons-material'
import history from '../../history'
import './SignUp.css'
import { theme } from '../../Theme/ThemeGenerator'
import { PTypography } from '../../Components/PersianComponent'
import { PRoundButton } from '../../Components/PersianComponent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {

  const initialFormData = Object.freeze({
    userName: '',
    email: '',
    password: '',
  })
  const [formData, updateFormData] = useState(initialFormData)
  const [errorData, updateErrorData] = useState(initialFormData)
  const [refresh, setRefresh] = useState(false)
  

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
    updateErrorData({
      ...errorData,
      [e.target.name]: '',
    })
    console.log(formData)
  }
  const {
    register,
    formState: { errors },
  } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    console.log(
      JSON.stringify({
        username: formData.userName,
        email: formData.email,
        password: formData.password,
      })
    )
    updateErrorData({
      ...errorData,
      userName: '',
    })
    updateErrorData({
      ...errorData,
      email: '',
    })
    updateErrorData({
      ...errorData,
      password: '',
    })
    console.log(errorData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: formData.userName,
        email: formData.email,
        password: formData.password,
      }),
    }
    fetch('http://127.0.0.1:8000/user/signup/', requestOptions)
      .then((response) => {
        if (response.status === 201) {
          alert('User registered!')
          history.push('/signin')
          window.location.reload(true)
        } else {
          throw response
        }
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          const errors = JSON.parse(errorMessage)
          console.log('e ' + errors.email)
          if (errors.username !== undefined) {
            updateErrorData({
              ...errorData,
              userName: errors.username,
            })
            return
          }

          if (errors.email !== undefined) {
            updateErrorData({
              ...errorData,
              email: errors.email,
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
              margin: 0,
              fontFamily: 'Kalameh'
            }}
          >
            <TextField
              id='userName'
              name='userName'
              variant='standard'
              label='Username'
              margin='normal'
              required
              helperText={errorData.userName != '' ? errorData.userName : ''}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <AccountCircle />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='email'
              name='email'
              variant='standard'
              label='Email'
              margin='normal'
              required
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <EmailSharp />{' '}
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
            />
            <TextField
              id='password'
              name='password'
              variant='standard'
              type='password'
              label='Password'
              margin='normal'
              required
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
            <div style={{ height: 20 }} />
            <PRoundButton variant='contained' alignContent = 'center'>
              <Link href='#' underline='none' color='white' onClick={handleSubmit}>
                <PTypography variant='h6' color={theme.palette.text}>
                  Sign Up
                </PTypography>
              </Link>
            </PRoundButton>
            <div style={{ height: 30 }} className='Buttons' />
            <div className='divSignUp'>
              <Link href='/signin' underline='none' color='primary' onClick={() => history.push('/signin')}>
                <Typography variant='h6' color={theme.palette.text}>
                Have an account?
                </Typography>
              </Link>
            </div>
          </div>
          <div style={{ height: 40 }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp