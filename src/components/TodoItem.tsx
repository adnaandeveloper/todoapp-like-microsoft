import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'
import { useStore } from '../store'
import Radio from '@mui/material/Radio'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import useCustomToggle from '../myToggleStore'

export default function TodoItem() {
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore()
  const { open, isFalse, toggleOpen, toggleToTrue, toggleOpenTodoDrawer } =
    useCustomToggle()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List
      sx={{
        marginTop: '-22  px !important',
        marginLeft: '-21px !important',

        '&:hover': { backgroundColor: '#ebebeb' },
        height: '50px !important',
        marginRight: '3px !important',
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
            <ListItemButton onClick={() => toggleOpenTodoDrawer()}>
              <ListItemIcon>
                <Radio edge='start' />
              </ListItemIcon>
              <ListItemText primary={value.description} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
