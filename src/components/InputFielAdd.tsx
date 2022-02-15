import { Button, Grid, makeStyles, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStore } from '../store'
import AddIcon from '@mui/icons-material/Add'
import Radio from '@mui/material/Radio'
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

import '../App.css'

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
      <div>
        {plus ? (
          <Box
            sx={{
              backgroundColor: '#f5f5f5',
              height: '140px',
              p: 0,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              margin: '0 8px',
            }}
          >
            <Grid position={'absolute'}>
              {' '}
              <Radio
                disabled
                sx={{
                  marginLeft: ' 2px',

                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              />
            </Grid>
            <TextField
              variant='standard'
              sx={{
                paddingRight: '-66px',
                marginTop: '9px',
                marginLeft: ' 43px',
                marginRight: '17px',
                borderColor: '#f5f5f5',
                backgroundColor: '#fafafa',
                borderRadius: 2,
                height: '44px',
                display: 'grid',
              }}
              placeholder='Tilføj en opgave'
              value={todoText}
              color='primary'
              focused
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
            <Grid sx={{ display: 'flex' }}>
              <Grid
                item
                xs={3}
                style={{ marginLeft: '39px', marginTop: '11px' }}
              >
                <Grid style={{ display: 'flex' }}>
                  <div>
                    <Button
                      sx={{
                        ':& hover': {
                          p: 5,
                        },
                      }}
                    >
                      {' '}
                      <DateRangeTwoToneIcon sx={{ fontSize: '15px' }} />{' '}
                    </Button>
                  </div>
                  <div>
                    <Button>
                      {' '}
                      <NotificationsNoneIcon sx={{ fontSize: '15px' }} />{' '}
                    </Button>
                  </div>
                  <Grid>
                    <Button>
                      {' '}
                      <CalendarTodayIcon sx={{ fontSize: '15px' }} />{' '}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={5}></Grid>

              <Grid item xs={3} position={'relative'}>
                <Typography>
                  <Button
                    className='addButton'
                    sx={{
                      fontSize: '12px',
                      color: '#c2c2c2',
                      '&:hover': { backgroundColor: '#f5f5f5' },
                      position: 'absolute',
                    }}
                  >
                    Tilføj
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              borderRadius: 2,
              width: '100%',

              p: 2,
              height: '54px',
              borderColor: '#b9bdba',
              backgroundColor: '#f5f5f5',
            }}
          >
            <Typography
              sx={{ fontSize: '1rem', color: '#838388', display: 'flex' }}
            >
              <AddIcon
                sx={{ color: '#8a95a1', width: '24px' }}
                onClick={() => setPlus(true)}
              />
              Tilføj en opgave
            </Typography>
          </Box>
        )}
      </div>
    </div>
  )
}

export default InputFielAdd
