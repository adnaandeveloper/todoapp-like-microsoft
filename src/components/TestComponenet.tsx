import { Button, Drawer, Typography } from '@mui/material'
import { height, width } from '@mui/system'
import React, { useState, ChangeEvent, MouseEvent } from 'react'
import MenuIcon from '@material-ui/icons/Menu'

const TestComponenet = () => {
  const [open, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    setOpen((prevopen) => !prevopen)
    console.log(open)
  }

  if (open) {
    const margin = '70%'
  }

  return (
    <>
      <MenuIcon onClick={() => setOpen((prevOpen) => !prevOpen)} />
      <div style={{ display: 'flex', marginLeft: open ? '23%' : '' }}>
        <Typography variant='h6'>ascwrwb</Typography>

        <Typography variant='h6'>helo helo</Typography>

        <Typography variant='h6'>helo helo</Typography>

        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
        <Typography variant='h6'>helo helo</Typography>
      </div>
      <Drawer
        open={open}
        onClick={handleClick}
        anchor='left'
        sx={{
          '& .MuiDrawer-paper': {
            width: '20%',
            height: '100%',
            backgroundColor: '#d5dbd6',
          },
        }}
        variant='persistent'
      />
    </>
  )
}

export default TestComponenet
