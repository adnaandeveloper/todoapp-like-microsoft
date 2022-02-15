import React from 'react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import '../App.css'

import SettingsIcon from '@mui/icons-material/Settings'
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import CustomizedInputBase from './InputFiel'
import InputBase from '@mui/material/InputBase'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import CampaignIcon from '@mui/icons-material/Campaign'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SearchIcon from '@mui/icons-material/Search'
import { maxWidth, width } from '@mui/system'

import { styled, alpha } from '@mui/material/styles'

import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
    color: 'black',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position='relative'
        style={{
          margin: 0,
          backgroundColor: '#0078d7',
        }}
      >
        <Toolbar>
          <Grid container spacing={6}>
            <Grid
              item
              xs={3}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button
                style={{ marginLeft: '-33px' }}
                sx={{
                  padding: '19px',
                  '&:hover': { backgroundColor: '#676f73' },
                }}
              >
                <ViewComfyIcon style={{ color: 'white' }} />
              </Button>

              <Typography>Outlook</Typography>
            </Grid>

            <Grid
              className='SearchGrid'
              item
              xs={6}
              style={{
                alignItems: 'center',
                maxWidth: '400px',

                margin: '10px',
              }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase />
              </Search>
            </Grid>

            <Grid
              item
              xs={3}
              wrap='nowrap'
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignSelf: 'end',
                placeContent: 'center',
              }}
            >
              <Box sx={{ display: 'contents' }}>
                <Button
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                  }}
                >
                  <SettingsIcon style={{ color: 'white' }} />
                </Button>
                <Button
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                  }}
                >
                  <QuestionMarkIcon style={{ color: 'white' }} />
                </Button>

                <Button
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                  }}
                >
                  <CampaignIcon style={{ color: 'white' }} />
                </Button>

                <Button
                  className='HeaderLastButton'
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: 'className' },
                  }}
                >
                  <AccountCircleRoundedIcon style={{ color: 'white' }} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
