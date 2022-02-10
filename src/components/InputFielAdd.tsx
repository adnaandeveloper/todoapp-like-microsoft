import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStore } from '../store'
import AddIcon from '@mui/icons-material/Add'

const InputFielAdd = () => {
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
    <div>
      <div style={{ width: '100%' }}>
        {plus ? (
          <Box style={{ width: '100%' }}>
            <TextField
              id='outlined-name'
              label='Tilføj en opgave'
              value={todoText}
              style={{ width: '100%' }}
              onChange={(e) => {
                e.preventDefault()
                handleChange(e, e.target.value)
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter' || e.keyCode === 13) {
                  // Do something
                  if (todoText) {
                    addTodo(todoText)
                  }
                  setTodoText('')
                  setPlus((prevPlus) => !prevPlus)
                }
              }}
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              p: 2,
              border: 1,
              borderColor: '#b9bdba',
              backgroundColor: '#faf8f7',
              '&:hover': {
                color: 'red',
                backgroundColor: 'white',
              },
            }}
          >
            <Typography variant='h6' color='primary'>
              {' '}
              <AddIcon
                sx={[
                  {
                    '&:hover': {
                      color: 'red',
                      fontSize: 26,
                    },
                  },
                ]}
                onClick={() => setPlus(true)}
              />{' '}
              Tilføj en opgave
            </Typography>
          </Box>
        )}
      </div>
    </div>
  )
}

export default InputFielAdd
