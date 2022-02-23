import { Drawer } from '@mui/material'
import React from 'react'

import TodoDrawerData from './TodoDrawerData'
import useCustomToggle from '../../Store/myToggleStore'

const TodoDrawer = (props: any) => {
  const { openTodoDrawer } = useCustomToggle()

  return (
    <>
      <div>{props.children}</div>
      <Drawer
        anchor={'right'}
        open={openTodoDrawer}
        sx={{
          overflowY: 'scroll',
          '& .MuiDrawer-paper': {
            backgroundColor: '#f4f4f4;',
            marginTop: '63px',
            height: `calc(100vh - 64px)`,
            width: '28%',
            overflowY: 'hidden',
            overflowX: 'hidden',
          },
        }}
        variant='persistent'
      >
        <TodoDrawerData />
      </Drawer>
    </>
  )
}

export default TodoDrawer
