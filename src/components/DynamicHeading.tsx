import { Button, CssBaseline, Grid, Typography } from '@mui/material'
import React from 'react'
import useCustomToggle from '../myToggleStore'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MenuIcon from '@material-ui/icons/Menu'

const DynamicHeading = () => {
  const { isNotFalse, isFalse, toggleToTrue, toggleToFalse } = useCustomToggle()

  return (
    <Grid container spacing={1} style={{ marginTop: '2px', marginLeft: '2px' }}>
      <div style={{}}>
        <Grid style={{ display: 'inline-flex' }}>
          {!isFalse && (
            <MenuIcon
              style={{ margin: '2px', marginTop: '4px' }}
              onClick={toggleToTrue}
            />
          )}

          <Typography variant='h6' color='primary' style={{ margin: '2px' }}>
            Opgaver
          </Typography>
          <MoreHorizIcon style={{ margin: '2px', marginTop: '9px' }} />
          <div style={{ display: 'flex' }}></div>
        </Grid>
      </div>
    </Grid>
  )
}

export default DynamicHeading
