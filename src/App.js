import logo from './logo.svg';
import './App.css';
import React from 'react';
// Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
import CssBaseline from '@mui/material/CssBaseline'
//
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Routes>
              //Routes
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/signin' element={<SignIn/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
