import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { useStore } from '../../Store/store'
import Radio from '@mui/material/Radio'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import useCustomToggle from '../../Store/myToggleStore'

export default function TodoItem() {
  const { todos } = useStore()
  const { toggleOpenTodoDrawer } = useCustomToggle()

  return (
    <List
      sx={{
        marginRight: '3px !important',
        height: '40px !important',
        marginLeft: '-15px',
      }}
    >
      {todos.map((value) => {
        return (
          <ListItem
            key={value.id}
            disablePadding
            secondaryAction={
              <IconButton edge='end' aria-label='comments'>
                <StarOutlineIcon />
              </IconButton>
            }
          >
            <ListItemButton
              onClick={() => {
                toggleOpenTodoDrawer()
                console.log(value.description)
              }}
              sx={{
                marginTop: '-15px !important',
                height: '65px !important',
                '&:hover': {
                  backgroundColor: '#ebebeb !important',
                  fontSize: '14px segoe',
                },
                color: '#34373D',
              }}
            >
              <ListItemIcon>
                <Radio edge='start' sx={{ color: 'blue' }} />
              </ListItemIcon>
              <ListItemText primary={value.description} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
