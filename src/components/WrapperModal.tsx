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

const WrapperModal = (props: any) => {
  const { open, isFalse, toggleOpen, toggleToTrue, openTodoDrawer } =
    useCustomToggle()
  const [openn, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    setOpen((prevopen) => !prevopen)
    toggleOpen()
  }

  return (
    <>
      <Header />
      <div
        style={{
          marginLeft: isFalse ? '26%' : '3px',
          marginRight: openTodoDrawer ? '20%' : '',
        }}
      >
        {props.children}
      </div>
      <Drawer
        open={isFalse}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#f4f4f4;',
            marginTop: '60px',
            height: `calc(100vh - 64px)`,
          },
        }}
        variant='persistent'
      >
        <DrawerData />
      </Drawer>
    </>
  )
}

export default WrapperModal
