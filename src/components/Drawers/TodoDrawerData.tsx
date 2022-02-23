import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import IconButton from '@mui/material/IconButton'

import Radio from '@mui/material/Radio'
import AddIcon from '@mui/icons-material/Add'
import { Button, Grid, TextField } from '@mui/material'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined'
import StarIcon from '@mui/icons-material/Star'
import DeleteIcon from '@mui/icons-material/Delete'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Box } from '@mui/system'

export default function TodoDrawerData() {
  return (
    <Box>
      <List sx={{ bgcolor: 'background.paper', margin: '11px' }}>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs='auto'>
            <ListItemIcon>
              <Radio sx={{ color: 'blue' }} />
            </ListItemIcon>
          </Grid>

          <Grid item xs={6}>
            <ListItem disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemText
                  primary='Make the action'
                  sx={{
                    marginLeft: '-12px',
                    fontSize: '1.6rem',
                    color: '#34373d',
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Grid>

          <Grid item xs>
            <ListItemIcon>
              <StarIcon
                sx={{
                  color: 'blue',
                  width: '18px',
                  marginLeft: '79px',
                }}
              />
            </ListItemIcon>
          </Grid>
        </Grid>
        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge='end' aria-label='comments'></IconButton>
          }
        >
          <ListItemIcon>
            <AddIcon
              sx={{
                color: 'blue',
                fontSize: '19px',
                width: '16px ',
                marginLeft: '12px',
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary='Tilføj trin'
            sx={{ fontSize: '1.1rem', color: '#3e69e4', marginLeft: '15px' }}
          />
        </ListItem>
      </List>

      <List sx={{ bgcolor: 'background.paper', margin: '11px' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LightModeOutlinedIcon sx={{ width: '18px', color: '#3e69e4' }} />
            </ListItemIcon>
            <ListItemText
              primary='Tilføj til min dag'
              sx={{
                color: '#3e69e4',
                fontSize: '11px segoe',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ bgcolor: 'background.paper', margin: '11px' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsNoneIcon sx={{ width: '18px' }} />
            </ListItemIcon>
            <ListItemText
              primary='Påmind mig'
              sx={{
                color: '#767678',
                fontSize: '11px segoe',
                borderBottom: ' 1px solid #f5f5f5',
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarTodayIcon sx={{ width: '18px' }} />
            </ListItemIcon>
            <ListItemText
              primary='Angiv forfaldsdato'
              sx={{
                color: '#767678',
                fontSize: '11px segoe',
                borderBottom: ' 1px solid #f5f5f5',
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DateRangeTwoToneIcon sx={{ width: '18px' }} />
            </ListItemIcon>
            <ListItemText
              primary='Gentag'
              sx={{
                color: '#767678',
                fontSize: '11px segoe',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{ bgcolor: 'background.paper', margin: '11px' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SellOutlinedIcon sx={{ width: '18px' }} />
            </ListItemIcon>
            <ListItemText
              primary='Valg kategori'
              sx={{
                color: '#767678',
                fontSize: '14px segoe',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{ bgcolor: 'background.paper', margin: '11px' }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AttachFileOutlinedIcon sx={{ width: '18px' }} />
            </ListItemIcon>
            <ListItemText
              primary='Tilføj fil'
              sx={{ color: '#767678', fontSize: '14px segoe' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ margin: '3px' }}>
        <ListItem disablePadding>
          <TextField
            placeholder='Tilføj note'
            multiline
            fullWidth
            inputProps={{
              style: {
                backgroundColor: 'white',

                height: ' 54px',
              },
            }}
            sx={{
              margin: '11px',
              backgroundColor: 'white',
            }}
          />
        </ListItem>
      </List>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='flex-end'
        sx={{
          display: 'flex',
          alignItems: ' center',
          padding: '0 10px',
          justifyContent: 'space-between',
          background: '#f4f4f4',
          borderTop: '1px solid #eaeaea',
          marginTop: '140px',
        }}
      >
        <Grid item>
          <Button style={{ color: '#666666', width: '18px' }}>
            <ExitToAppIcon />
          </Button>
        </Grid>
        <Grid item>
          <ListItemText
            primary='Oprettet I dag'
            sx={{ color: '#34373d', fontSize: '1rem' }}
          />
        </Grid>
        <Grid item>
          <Button style={{ color: '#666666', width: '18px' }}>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
