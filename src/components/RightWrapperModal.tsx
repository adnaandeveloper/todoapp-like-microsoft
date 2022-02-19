import { Button, Drawer, Grid, makeStyles, Typography } from '@mui/material'
import { height, width } from '@mui/system'
import React, { useState, ChangeEvent, MouseEvent } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Item from './Item'
import DrawerData from './DrawerData'
import DynamicHeading from './DynamicHeading'
import useCustomToggle from '../myToggleStore'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PeopleIcon from '@mui/icons-material/People'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CheckIcon from '@mui/icons-material/Check'
import Header from './Header'

const RightWrapperModal = (props: any) => {
  const { open, isFalse, toggleOpen, toggleToTrue } = useCustomToggle()
  const [heigh, setHeight] = useState()

  return (
    <>
      <div>{props.children}</div>
      <Drawer
        anchor={'right'}
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#f4f4f4;',
            marginTop: '63px',
            height: `calc(100vh - 64px)`,
            width: '20%',
          },
        }}
        variant='persistent'
      >
        <h1>Hello </h1>
      </Drawer>
    </>
  )
}

export default RightWrapperModal
