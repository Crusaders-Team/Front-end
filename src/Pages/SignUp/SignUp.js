import React, { useState, useEffect } from 'react'
import Background from '../../Images/SignUp/SignUpImg.png'
import { Grid, TextField, Button, InputAdornment } from '@mui/material'
import { AccountCircle, VpnKey, EmailSharp, Create } from '@mui/icons-material'
import history from '../../history'
import './SignUp.css'
import { theme } from '../../Theme/ThemeGenerator'
import { PTypography } from '../../Components/PersianComponent'
import { PRoundButton } from '../../Components/PersianComponent'
import Link from '@mui/material/Link'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function SignUp() {

  return (
    <div>
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
            dir='rtl'
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
              id='name'
              name='name'
              variant='standard'
              label='نام'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <Create />{' '}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='lastName'
              name='lastName'
              variant='standard'
              label='نام کاربری'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <AccountCircle />{' '}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='userName'
              name='userName'
              variant='standard'
              label='شماره تماس'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <PhoneEnabledIcon />{' '}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='email'
              name='email'
              variant='standard'
              label='ایمیل'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <EmailSharp />{' '}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='password'
              name='password'
              variant='standard'
              type='password'
              label='رمز عبور'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <VpnKey />{' '}
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <PRoundButton variant='contained' alignContent = 'center'>
              <Link href='#' underline='none' color='white'>
                <PTypography variant='h6' color={theme.palette.text}>
                  ثبت نام
                </PTypography>
              </Link>
            </PRoundButton>
            <div style={{ height: 30 }} className='Buttons' />
            <div className='divSignUp'>
              <Link href='/signin' underline='none' color='primary'>
                <PTypography variant='h6' color={theme.palette.text}>
                  ورود
                </PTypography>
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