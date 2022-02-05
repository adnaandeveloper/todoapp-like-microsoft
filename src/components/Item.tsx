import { BatteryCharging20Rounded } from '@material-ui/icons'
import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Toolbar,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useStore } from '../store'
import Checkbox from '@material-ui/core/Checkbox'

const Item = () => {
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addTodo(event.target.value)
  }

  return (
    <>
      <div style={{ width: '100%' }}>
        <Box component='form'>
          <TextField
            id='outlined-name'
            label='Tilføj en opgave'
            value={''}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </Box>
      </div>
      <div style={{ display: 'inline-grid' }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
          <FormControlLabel control={<Checkbox />} label='shaqo 6' />
        </FormGroup>
      </div>
    </>
  )
}

export default Item
