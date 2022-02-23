import { Button, Grid, Typography, IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStore } from '../Store/store'
import AddIcon from '@mui/icons-material/Add'
import Radio from '@mui/material/Radio'
import DateRangeTwoToneIcon from '@mui/icons-material/DateRangeTwoTone'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

import '../App.css'

interface ICustomComponentProps {
  text: string
  addToList: (description: string) => void
}

const InputFielAdd = (props: ICustomComponentProps) => {
  const { text, addToList } = props
  const { addTodo } = useStore()
  const [todoText, setTodoText] = useState('')

  const [plus, setPlus] = useState(false)

  const handleChange = (e: any) => {
    e.preventDefault()
  }

  const keyPress = (e: any) => {
    if (e.keyCode === 13) {
      console.log({ todoText })

      console.log('handleChange is called !')
      if (todoText) {
        addToList(todoText)
        // addTodo(todoText)
      }

      setTodoText('')

      console.log({ todoText })
    }
  }

  const handleForm = () => {
    console.log('u cant call me without writing something bro!')
    console.log(todoText)
    if (todoText) {
      addTodo(todoText)
    }

    setTodoText('')
  }

  return (
    <div>
      <div style={{}}>
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
            <form noValidate autoComplete='off' onSubmit={handleChange}>
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
                  autoFocus: 'autoFocus',
                }}
                placeholder={text}
                color='primary'
                focused
                onKeyDown={keyPress}
                onChange={(e: any) => setTodoText(e.target.value)}
                value={todoText}
              />
            </form>

            <Grid sx={{ display: 'flex' }}>
              <Grid
                item
                xs={3}
                style={{ marginLeft: '39px', marginTop: '6px' }}
              >
                <Grid container spacing={1} style={{ display: 'flex' }}>
                  <Grid item>
                    <IconButton>
                      <DateRangeTwoToneIcon
                        sx={{
                          fontSize: '27px',
                          padding: '2px',
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <NotificationsNoneIcon
                        sx={{
                          fontSize: '27px',
                          padding: '2px',
                        }}
                      />{' '}
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <CalendarTodayIcon
                        sx={{
                          fontSize: '27px',
                          padding: '2px',
                        }}
                      />
                    </IconButton>
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
                    onChange={(e: any) => setTodoText(e.target.value)}
                    onClick={handleForm}
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
              {props.text}
            </Typography>
          </Box>
        )}
      </div>
    </div>
  )
}

export default InputFielAdd
