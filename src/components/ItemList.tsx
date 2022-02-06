import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material'
import MenuIcon from '@material-ui/icons/Menu'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import React, { useState } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import DateRangeIcon from '@material-ui/icons/DateRange'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import HomeIcon from '@material-ui/icons/Home'
import Item from './Item'
const ItemList = () => {
  const [drawer, setDrawer] = useState(true)

  const clickHandler = () => {
    setDrawer((prevDrawerState) => !prevDrawerState)
  }

  return (
    <>
      <CssBaseline />
      {!drawer ? (
        <Grid container spacing={3}>
          <Grid
            item
            xs
            style={{ border: 'solid', height: '100vh', marginBottom: '10px' }}
          >
            <MenuIcon onClick={clickHandler} />
            <Grid>
              <Grid container spacing={1} style={{ display: 'block' }}>
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
            </Grid>
          </Grid>

          <Grid item xs={8} style={{ border: 'solid', height: '100vh' }}>
            <div style={{ marginTop: '20px' }}>
              <Item />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs style={{ border: 'solid', height: '100vh' }}>
            <MenuIcon onClick={clickHandler} />
            <div style={{ marginTop: '20px' }}>
              <Item />
            </div>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ItemList
