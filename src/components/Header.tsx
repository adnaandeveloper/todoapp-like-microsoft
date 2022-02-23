import React, { useState } from 'react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import '../App.css'
import SettingsIcon from '@mui/icons-material/Settings'
import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material'

import InputBase from '@mui/material/InputBase'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import CampaignIcon from '@mui/icons-material/Campaign'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import useCustomToggle from '../Store/myToggleStore'

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
  const { open, toggleOpen } = useCustomToggle()

  const [isTouchSettingIcon, setIsTouchSettingIcon] = useState(false)
  const [isTouchQuestionMarkIcon, setIsTouchQuestionMarkIcon] = useState(false)
  const [isTouchCampaignIcon, setIsTouchCampaignIcon] = useState(false)
  const [isTouchAccountCircleRoundedIcon, setIsTouchAccountCircleRoundedIcon] =
    useState(false)

  const handleClickSettingIcon = () => {
    setIsTouchQuestionMarkIcon(false)
    setIsTouchCampaignIcon(false)
    setIsTouchAccountCircleRoundedIcon(false)

    if (!open) {
      toggleOpen()
      setIsTouchSettingIcon(true)
    } else if (isTouchSettingIcon) {
      toggleOpen()
      setIsTouchSettingIcon(false)
    } else {
      setIsTouchSettingIcon(true)
    }

    //setPlus((prevPlus) => !prevPlus)
  }

  const handleClickQuestionMarkIcon = () => {
    setIsTouchSettingIcon(false)
    setIsTouchCampaignIcon(false)
    setIsTouchAccountCircleRoundedIcon(false)

    if (!open) {
      toggleOpen()
      setIsTouchQuestionMarkIcon(true)
    } else if (isTouchQuestionMarkIcon) {
      toggleOpen()

      setIsTouchQuestionMarkIcon(false)
    } else {
      setIsTouchQuestionMarkIcon(true)
    }
    //setPlus((prevPlus) => !prevPlus)
  }

  const handleClickCampaignIcon = () => {
    setIsTouchSettingIcon(false)
    setIsTouchQuestionMarkIcon(false)
    setIsTouchAccountCircleRoundedIcon(false)

    if (!open) {
      toggleOpen()
      setIsTouchCampaignIcon(true)
    } else if (isTouchCampaignIcon) {
      toggleOpen()
      setIsTouchCampaignIcon(false)
    } else {
      setIsTouchCampaignIcon(true)
    }

    //setPlus((prevPlus) => !prevPlus)
  }
  const handleClickAccountCircleRoundedIcon = () => {
    setIsTouchSettingIcon(false)
    setIsTouchCampaignIcon(false)
    setIsTouchQuestionMarkIcon(false)

    if (!open) {
      toggleOpen()
      setIsTouchAccountCircleRoundedIcon(true)
    } else if (isTouchAccountCircleRoundedIcon) {
      toggleOpen()
      setIsTouchAccountCircleRoundedIcon(false)
    } else {
      setIsTouchAccountCircleRoundedIcon(true)
    }

    //setPlus((prevPlus) => !prevPlus)
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        elevation={0}
        position='relative'
        style={{
          margin: 0,
          backgroundColor: '#0078d7',
          borderWidth: 0,
          minHeight: 59,
          height: '59px',
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
                  onClick={handleClickSettingIcon}
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                    ...(isTouchSettingIcon
                      ? { backgroundColor: 'white', color: 'black' }
                      : ''),
                  }}
                >
                  <SettingsIcon
                    style={{ color: isTouchSettingIcon ? 'black' : 'white' }}
                  />
                </Button>
                <Button
                  onClick={handleClickQuestionMarkIcon}
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                    backgroundColor: isTouchQuestionMarkIcon ? 'white' : '',
                  }}
                >
                  <QuestionMarkIcon
                    style={{
                      color: isTouchQuestionMarkIcon ? 'black' : 'white',
                    }}
                  />
                </Button>

                <Button
                  onClick={handleClickCampaignIcon}
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                    backgroundColor: isTouchCampaignIcon ? 'white' : '',
                  }}
                >
                  <CampaignIcon
                    style={{ color: isTouchCampaignIcon ? 'black' : 'white' }}
                  />
                </Button>

                <Button
                  onClick={handleClickAccountCircleRoundedIcon}
                  className='HeaderLastButton'
                  sx={{
                    padding: '19px',
                    '&:hover': { backgroundColor: '#676f73' },
                    backgroundColor: isTouchAccountCircleRoundedIcon
                      ? 'white'
                      : '',
                  }}
                >
                  <AccountCircleRoundedIcon
                    style={{
                      color: isTouchAccountCircleRoundedIcon
                        ? 'black'
                        : 'white',
                    }}
                  />
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
