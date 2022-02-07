import { Button, Drawer, Typography } from '@mui/material'
import { height, width } from '@mui/system'
import React, { useState, ChangeEvent, MouseEvent } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import Item from './Item'
import DrawerData from './DrawerData'
import DynamicHeading from './DynamicHeading'
import useCustomToggle from '../myToggleStore'

const ItemList = () => {
  const { isNotFalse, isFalse, toggleToFalse, toggleToTrue } = useCustomToggle()
  const [open, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    setOpen((prevopen) => !prevopen)
    toggleToFalse()
    console.log(open)
  }

  return (
    <>
      <div style={{ marginLeft: isFalse ? '21%' : '3px' }}>
        <DynamicHeading />

        <Item />
      </div>
      <Drawer
        open={isFalse}
        sx={{
          '& .MuiDrawer-paper': {
            width: '20%',
            height: '100%',
            backgroundColor: '#faf8f7',
            marginTop: '63px',
          },
        }}
        variant='persistent'
      >
        <DrawerData />
      </Drawer>
    </>
  )
}

export default ItemList
