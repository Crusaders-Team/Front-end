import React, {
    useEffect,
    useState,
    forwardRef,
    useRef,
    useImperativeHandle,
  } from 'react'
  import { styled, alpha } from '@mui/material/styles'
  import AppBar from '@mui/material/AppBar'
  import Box from '@mui/material/Box'
  import Toolbar from '@mui/material/Toolbar'
  import IconButton from '@mui/material/IconButton'
  import Typography from '@mui/material/Typography'
  import InputBase from '@mui/material/InputBase'
  import Badge from '@mui/material/Badge'
  import MenuItem from '@mui/material/MenuItem'
  import Menu from '@mui/material/Menu'
  import MenuIcon from '@mui/icons-material/Menu'
  import SearchIcon from '@mui/icons-material/Search'
  import AccountCircle from '@mui/icons-material/AccountCircle'
  import ForumIcon from '@mui/icons-material/Forum'
  import NotificationsIcon from '@mui/icons-material/Notifications'
  import MoreIcon from '@mui/icons-material/MoreVert'
  import Button from '@mui/material/Button'
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
  import Grid from '@mui/material/Grid'
  import UserDropDown from '../UserDropDown/UserDropDown'
  import { Link } from 'react-router-dom'
  import './Navbar.css'

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  }))
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      transition: theme.transitions.create('width'),
    },
  }))
  
  const StyledColorSerchIconButton = styled(IconButton)(({ theme }) => ({
    color: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      color: alpha(theme.palette.common.white, 0.75),
    },
  }))
  
  const Navbar = forwardRef((props, ref) => {
    const [isAuthorized, setAuthorized] = useState(false)
    const [numberOfTicket, setNumberOfTicket] = useState([3])
    const [numberOfItems, setNumberOfItems] = useState(0)
    const [userData, setUserData] = React.useState([])
    const [userType, setUserType] = React.useState('')
    const [coins, setCoinsNumber] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [kind, setKind] = useState('')
  
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: { xs: 'fixed', sm: 'static' } }}>
          <Toolbar>
            <Grid display={{ xs: 'flex', md: 'none' }}>
              {props.DrawerOption && (
                <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='open drawer'
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Grid>
            {props.DrawerOption && (
              <Link to='/Homepage'>
                <Typography
                  variant='h4'
                  noWrap
                  component='div'
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                  className='Title'
                >
                  LetsWatch
                </Typography>
              </Link>
            )}
            {!props.DrawerOption && (
              <Link to='/Homepage'>
                <Typography variant='h4' noWrap component='div' className='Title'>
                  LetsWatch
                </Typography>
              </Link>
            )}
            {props.SearchOption && (
              <Search>
                <Grid wrap='nowrap' container direction='row' alignItems='center'>
                  <Grid item>
                    <StyledColorSerchIconButton
                      sx={{ ml: 2, p: 1 }}
                      size='small'
                      href={'/search/' + searchText}
                    >
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                    </StyledColorSerchIconButton>
                  </Grid>
                  <Grid item>
                    <StyledInputBase
                      sx={{ ml: 0 }}
                      placeholder='Search for …'
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Grid>
                </Grid>
              </Search>
            )}
  
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {props.AuthorizationOption &&
                isAuthorized === true &&
                kind === 'MEMBER'}
  
              {/*props.AuthorizationOption &&
                isAuthorized === true &&
                props.TicketOption &&
                props.numberOfTicket !== 0 && (
                  <IconButton size='large' color='inherit'>
                    <Badge badgeContent={numberOfTicket} color='secondary'>
                      <ForumIcon />
                    </Badge>
                  </IconButton>
                )*/}
  
              {props.AuthorizationOption &&
                isAuthorized === true &&
                props.AddTicketOption }
  
              {props.AuthorizationOption &&
                isAuthorized === true &&
                props.CartOption &&
                props.numberOfItems !== 0 && (
                  <IconButton size='large' color='inherit' href='/cart'>
                    <Badge badgeContent={numberOfItems} color='secondary'>
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                )}
  
              {props.AuthorizationOption && isAuthorized === true && (
                <UserDropDown kind={kind} />
              )}
              {props.AuthorizationOption && isAuthorized === false && (
                <Button
                  edge='end'
                  aria-label='account of current user'
                  aria-haspopup='true'
                  color='inherit'
                  variant='outlined'
                  startIcon={<AccountCircle />}
                  sx={{ m: 1 }}
                  href='/signin'
                >
                  Sign in
                </Button>
              )}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {props.AuthorizationOption && isAuthorized === true && (
                <UserDropDown />
              )}
              {props.AuthorizationOption && isAuthorized === false && (
                <IconButton
                  edge='end'
                  aria-label='account of current user'
                  aria-haspopup='true'
                  color='inherit'
                  sx={{ m: 1 }}
                  href='/signin'
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    )
  })
  
  export default Navbar