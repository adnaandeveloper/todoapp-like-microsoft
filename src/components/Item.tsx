import { BatteryCharging20Rounded } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import {
  AppBar,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Toolbar,
  Typography,
  Checkbox,
  Container,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStore } from '../store'
import InputFielAdd from './InputFielAdd'
import picture from '../images/papir.jpg'

var sectionStyle = {
  width: '100%',
  height: '400px',
  backgroundImage: 'url(' + { picture } + ')',
}

const Item = () => {
  console.log('plus im from item component yees im her can you see mee now?')
  const { addTodo, removeTodo, toggleCompletedState, todos } = useStore()
  const [todoText, setTodoText] = useState('')
  const [plus, setPlus] = useState(false)
  console.log({ plus })
  const handleChange = (e: any, value: string) => {
    if (value) {
      setTodoText(value)
    }
    if (e.key === 'Enter') {
      setPlus((prevPlus) => !prevPlus)
    }
  }

  return (
    <>
      <Container>
        <div
          style={{
            margin: 0,
          }}
        >
          <div style={{ marginBottom: 0 }}>
            <InputFielAdd />
          </div>

          <div
            style={{
              height: '75vh',
              backgroundImage:
                'repeating-linear-gradient(#e5e5e5, #e5e5e5 1px, #ffffff 1px,  #ffffff 50px )',
            }}
          >
            <div
              style={{
                display: 'inline-grid',
              }}
            >
              <FormGroup>
                {todos.map((todo) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label={todo.description}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Item
