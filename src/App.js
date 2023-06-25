import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useEffect } from 'react';
// Pages
import HomePage from './Pages/HomePage/HomePage'
import MyVideos from './Pages/MyVideos/MyVideos'
import EditVideo from './Pages/EditVideo/EditVideo'
import CreateVideo from './Pages/CreateVideo/CreateVideo'
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import EditProfile from './Pages/EditProfile/EditProfile';
// Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
import CssBaseline from '@mui/material/CssBaseline'
//
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/myvideos" element={<MyVideos />} />
              <Route path="/editvideo" element={<EditVideo />} />
              <Route path="/createvideo" element={<CreateVideo />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/editprofile" element={<EditProfile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
