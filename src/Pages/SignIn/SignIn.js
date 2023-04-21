import React from 'react'
import Background from '../../Images/SignIn/SignInImg.png'
import { Grid, TextField, InputAdornment, ThemeProvider } from '@mui/material'
import { EmailRounded, VpnKey } from '@mui/icons-material'
import './SignIn.css'
import { PTypography } from '../../Components/PersianComponent'
import { PRoundButton } from '../../Components/PersianComponent'
import Link from '@mui/material/Link'
import { theme } from '../../Theme/ThemeGenerator'

function SignIn() {
  return (
    <div>
      <ThemeProvider theme={theme}>
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
              }}
            >
              <TextField
                className='textFieldContainer'
                variant='standard'
                name='email'
                label='ایمیل'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {' '}
                      <EmailRounded />{' '}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant='standard'
                type='password'
                name='password'
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
                <Link href='#' underline='none' color='white'>
                  <PTypography variant='h6' color={theme.palette.text}>
                    ورود
                  </PTypography>
                </Link>
              </PRoundButton>
              <div style={{ height: 30 }} className='Buttons' />
              <div className='divSignUp'>
                <Link href='/signup' underline='none' color='primary'>
                  <PTypography variant='h6' color={theme.palette.text}>
                    ثبت نام
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