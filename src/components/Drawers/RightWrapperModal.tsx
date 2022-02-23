import { Drawer } from '@mui/material'
import React from 'react'
import useCustomToggle from '../../Store/myToggleStore'
type Props = { children: React.ReactNode }

const RightWrapperModal = (props: Props) => {
  const { open } = useCustomToggle()

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
