import React from 'react'
import { Button, Grid } from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

const RightComponent = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: 'flex',
        justifyContent: 'end',
        marginTop: '-65px',
        marginRight: '34px',
      }}
    >
      <Grid
        item
        xs={12}
        style={{ display: 'flex', justifyContent: 'end', marginRight: '3%' }}
      >
        <Button sx={{ color: '#394453', fontSize: '10px' }}>
          <SwapVertIcon /> Sortér
        </Button>
        <Button sx={{ color: '#394453', fontSize: '10px' }}>
          <LightbulbOutlinedIcon /> Fortslag
        </Button>
      </Grid>
    </Grid>
  )
}

export default RightComponent
