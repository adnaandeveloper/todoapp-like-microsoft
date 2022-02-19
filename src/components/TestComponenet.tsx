import { Button, Grid, makeStyles, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
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
  const textRef = useRef()
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
      <div style={{ marginRight: 2, marginLeft: -20 }}>
        {plus ? (
          <Box
            onClick={() => setPlus(true)}
            sx={{
              backgroundColor: '#f5f5f5',
              height: '110px',
              p: 0,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid position={'absolute'}>
              {' '}
              <Radio
                disabled
                sx={{
                  marginLeft: ' 2px',
                  marginTop: '11px',

                  '&:hover': { backgroundColor: '#f5f5f5' },
                }}
              />
            </Grid>
            <TextField
              variant='standard'
              autoFocus
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
              inputRef={textRef}
              color='primary'
              focused
              onChange={(e) => {
                e.preventDefault()
                handleChange(e, e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
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
                <Grid container spacing={1} style={{ display: 'flex' }}>
                  <Grid item>
                    <DateRangeTwoToneIcon
                      sx={{
                        fontSize: '27px',
                        padding: '2px',
                        '&:hover': {
                          backgroundColor: '#8a788c',
                          color: 'white',
                        },
                      }}
                    />{' '}
                  </Grid>
                  <Grid item>
                    <NotificationsNoneIcon
                      sx={{
                        fontSize: '27px',
                        padding: '2px',
                        '&:hover': {
                          backgroundColor: '#8a788c',
                          color: 'white',
                        },
                      }}
                    />{' '}
                  </Grid>
                  <Grid item>
                    <CalendarTodayIcon
                      sx={{
                        fontSize: '27px',
                        padding: '2px',
                        '&:hover': {
                          backgroundColor: '#8a788c',
                          color: 'white',
                        },
                      }}
                    />{' '}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={5}></Grid>

              <Grid item xs={3}>
                <Typography
                  sx={{
                    display: 'grid',

                    justifySelf: 'end',
                  }}
                >
                  <Button
                    className='addButton'
                    sx={{
                      fontSize: '12px',
                      color: todoText ? '#2f5b86' : '#c2c2c2',

                      '&:hover': { backgroundColor: '#f5f5f5' },
                      gridRowEnd: 'auto',
                      justifySelf: 'end',
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
            onClick={() => setPlus(true)}
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
