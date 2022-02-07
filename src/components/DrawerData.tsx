import { Grid, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

import StarBorderIcon from '@material-ui/icons/StarBorder'
import DateRangeIcon from '@material-ui/icons/DateRange'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import HomeIcon from '@material-ui/icons/Home'
import useCustomToggle from '../myToggleStore'

const DrawerData = () => {
  const { isNotFalse, isFalse, toggleToTrue, toggleToFalse } = useCustomToggle()
  return (
    <>
      <Grid container spacing={1} style={{ display: 'block' }}>
        <MenuIcon style={{ margin: '10px' }} onClick={toggleToTrue} />

        <Grid item>
          <Typography variant='h6'>
            <WbSunnyIcon />
            Min Opgaver
          </Typography>
        </Grid>

        <Grid item>
          <StarBorderIcon />
          Vigtigt
        </Grid>
        <Grid item>
          <DateRangeIcon />
          Planlagt
        </Grid>
        <Grid item>
          <PersonOutlineIcon />
          Tildelt mig
        </Grid>
        <Grid item>
          <EmojiFlagsIcon />
          Mail markeret med flag
        </Grid>
        <Grid item>
          <HomeIcon />
          Opgaver
        </Grid>
      </Grid>
    </>
  )
}

export default DrawerData
