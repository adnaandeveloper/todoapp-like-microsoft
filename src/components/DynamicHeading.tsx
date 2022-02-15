import {
  Button,
  CssBaseline,
  Grid,
  List,
  ListItemButton,
  Typography,
} from '@mui/material'
import React from 'react'
import useCustomToggle from '../myToggleStore'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MenuIcon from '@mui/icons-material/Menu'
import { red } from '@mui/material/colors'
import { useLocation } from 'react-router-dom'

const DynamicHeading = () => {
  const { isNotFalse, isFalse, toggleToTrue, toggleToFalse } = useCustomToggle()
  const CurrentLocation = useLocation()

  return (
    <Grid container spacing={1} style={{ marginTop: '2px', marginLeft: '2px' }}>
      <div style={{}}>
        <List>
          <Grid style={{ display: 'inline-flex' }}>
            {!isFalse && (
              <ListItemButton>
                <MenuIcon
                  style={{ margin: '2px', marginTop: '0', color: '#a2a2a4' }}
                  onClick={toggleToTrue}
                />
              </ListItemButton>
            )}

            <Typography variant='h6' color='primary' style={{ margin: '2px' }}>
              {CurrentLocation.pathname === '/'
                ? 'Opgaver'
                : CurrentLocation.pathname
                    .replace(/20/g, ' ')
                    .replace(/%/g, '')
                    .slice(1)}
            </Typography>
            <MoreHorizIcon style={{ margin: '2px', marginTop: '9px' }} />
            <div style={{ display: 'flex' }}></div>
          </Grid>
        </List>
      </div>
    </Grid>
  )
}

export default DynamicHeading
