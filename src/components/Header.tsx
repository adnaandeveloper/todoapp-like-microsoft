import React from 'react'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import SettingsIcon from '@mui/icons-material/Settings'
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'
import CustomizedInputBase from './InputFiel'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import CampaignIcon from '@mui/icons-material/Campaign'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs>
              <Grid container spacing={2}>
                <Grid item>
                  <ViewComfyIcon />
                </Grid>
                <Grid item>
                  <Typography variant='h6'>Todo App</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <CustomizedInputBase />
            </Grid>

            <Grid item xs>
              <Grid container spacing={3}>
                <Grid item>
                  <SettingsIcon />
                </Grid>

                <Grid item>
                  <QuestionMarkIcon />
                </Grid>

                <Grid item>
                  <CampaignIcon />
                </Grid>
                <Grid item>
                  <AccountCircleRoundedIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
