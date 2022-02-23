import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import HomeIcon from '@mui/icons-material/Home'
import useCustomToggle from '../../Store/myToggleStore'
import { Link, useNavigate } from 'react-router-dom'

import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PeopleIcon from '@mui/icons-material/People'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CheckIcon from '@mui/icons-material/Check'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'

const DrawerData = () => {
  const navigate = useNavigate()
  const { toggleToTrue } = useCustomToggle()

  const [selectedIndex, setSelectedIndex] = useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index)
  }

  const handleClick = (ad: string) => {
    navigate(ad)
  }
  return (
    <Grid container style={{ width: 350, height: `100%` }}>
      <Grid item xs={12}>
        <List sx={{ justifyContent: 'space-between' }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => toggleToTrue()}>
              <ListItemIcon>
                <MenuIcon style={{ color: '#a2a2a4' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => {
              handleListItemClick(event, 0)
              handleClick('/')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <Link to='/'></Link>

            <ListItemIcon>
              <WbSunnyOutlinedIcon sx={{ color: '#767678', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              <ListItemText
                primary='Mine Opgaver'
                sx={{ color: '#34373d', fontSize: '1.4rem' }}
              />
            </Link>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => {
              handleListItemClick(event, 0)
              handleClick('Vigtigt')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <ListItemIcon>
              <StarBorderIcon sx={{ color: '#767678', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='Vigtigt' style={{ textDecoration: 'none' }}>
              <ListItemText
                primary='Vigtigt'
                sx={{
                  color: '#34373d',
                  fontSize: '1.4rem',
                }}
              />
            </Link>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => {
              handleListItemClick(event, 2)
              handleClick('Planlagt')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <ListItemIcon>
              <DateRangeIcon sx={{ color: '#767678', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='Planlagt' style={{ textDecoration: 'none' }}>
              <ListItemText
                primary='Planlagt'
                sx={{ color: '#34373d', fontSize: '1.4rem' }}
              />
            </Link>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => {
              handleListItemClick(event, 3)
              handleClick('Tilmeldt')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <ListItemIcon>
              <PersonOutlineIcon sx={{ color: ' #767678', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='Tilmeldt' style={{ textDecoration: 'none' }}>
              <ListItemText
                primary='Tildelt mig'
                sx={{ color: '#34373d', fontSize: '1.4rem' }}
              />
            </Link>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => {
              handleListItemClick(event, 4)
              handleClick('Mail')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <ListItemIcon>
              <EmojiFlagsIcon sx={{ color: ' #5b6be6', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='Mail' style={{ textDecoration: 'none' }}>
              <ListItemText
                primary='Mail Markeret Med Flag'
                sx={{ color: '#34373d', fontSize: '1.4rem' }}
              />
            </Link>
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => {
              handleListItemClick(event, 5)
              handleClick('/')
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#ededed',
              },
            }}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: ' #5b6be6', fontSize: 24 }} />
            </ListItemIcon>
            <Link to='Opgaver' style={{ textDecoration: 'none' }}>
              <ListItemText
                primary='Opgaver'
                sx={{ color: '#34373d', fontSize: '1.4rem' }}
              />
            </Link>
          </ListItemButton>
        </List>{' '}
      </Grid>
      <Grid item xs={12} style={{ alignSelf: 'end' }}>
        <Box borderTop={1} borderColor={'#dedede'}>
          {[
            <MailOutlineIcon
              key={1}
              fontSize='small'
              style={{ color: '#34373d' }}
            />,
            <CalendarTodayIcon
              key={2}
              fontSize='small'
              style={{ color: '#34373d' }}
            />,
            <PeopleIcon
              key={3}
              fontSize='small'
              style={{ color: '#34373d' }}
            />,
            <AttachFileIcon
              key={4}
              fontSize='small'
              style={{ color: '#34373d' }}
            />,
            <CheckIcon key={5} fontSize='small' />,
          ].map((icon, i) => (
            <Button key={i}>{icon}</Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}

export default DrawerData
