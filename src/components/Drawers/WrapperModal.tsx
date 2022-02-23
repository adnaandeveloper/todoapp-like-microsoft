import { Drawer } from '@mui/material'

import React from 'react'

import DrawerData from './DrawerData'

import Header from '../Header'
import useCustomToggle from '../../Store/myToggleStore'

const WrapperModal = (props: any) => {
  const { isFalse, openTodoDrawer } = useCustomToggle()

  return (
    <>
      <Header />
      <div
        style={{
          marginLeft: isFalse ? '26%' : '3px',
          marginRight: openTodoDrawer ? '29%' : '',
        }}
      >
        {props.children}
      </div>
      <Drawer
        open={isFalse}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#f4f4f4;',
            marginTop: '63px',
            height: `calc(100vh - 64px)`,
            borderWidth: 0,
          },
          overflowY: 'scroll',
        }}
        variant='persistent'
      >
        <DrawerData />
      </Drawer>
    </>
  )
}

export default WrapperModal
