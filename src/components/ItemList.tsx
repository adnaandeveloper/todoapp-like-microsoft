import { Button, Drawer, Grid, Typography } from '@mui/material'
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

const ItemList = () => {
  const { open, isFalse, toggleOpen, toggleToTrue } = useCustomToggle()
  const [openn, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    setOpen((prevopen) => !prevopen)
    toggleOpen()
  }

  return (
    <>
      <div style={{ marginLeft: isFalse ? '21%' : '3px' }}>
        <h1> hey</h1>
      </div>
    </>
  )
}

export default ItemList
