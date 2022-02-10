import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

import StarBorderIcon from '@material-ui/icons/StarBorder'
import DateRangeIcon from '@material-ui/icons/DateRange'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import HomeIcon from '@material-ui/icons/Home'
import useCustomToggle from '../myToggleStore'
import { Link } from 'react-router-dom'

const DrawerData = () => {
  const { toggleToTrue } = useCustomToggle()
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <MenuIcon style={{ margin: '10px' }} onClick={toggleToTrue} />
        <Grid>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WbSunnyIcon />
                  <Link to='/'>
                    <ListItemText primary='Mine Opgaver' />
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <Grid item>
              <Link to='Vigtigt'>
                {' '}
                <StarBorderIcon />
                Vigtigt{' '}
              </Link>
            </Grid>
            <Grid item>
              <Link to='Planlagt'>
                <DateRangeIcon />
                Planlagt
              </Link>
            </Grid>
            <Grid item>
              <Link to='Tildelt Mig'>
                <PersonOutlineIcon />
                Tildelt mig
              </Link>
            </Grid>
            <Grid item>
              <Link to=' Mail Markeret Med Flag'>
                <EmojiFlagsIcon />
                Mail markeret med flag
              </Link>
            </Grid>
            <Grid item>
              <Link to='Opgaver'>
                <HomeIcon />
                Opgaver
              </Link>
            </Grid>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default DrawerData
