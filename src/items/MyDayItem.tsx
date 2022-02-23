import TodoItem from '../components/Drawers/TodoItem'
import { Container } from '@mui/material'

import React from 'react'
import { useStore } from '../Store/store'
import InputFielAdd from '../components/InputFielAdd'
import useCustomToggle from '../Store/myToggleStore'

const MyDayItem = () => {
  console.log('plus im from item component yees im her can you see mee now?')
  const { addTodo, todos } = useStore()
  const { open, isFalse, toggleOpen } = useCustomToggle()

  const toggleRightDrawerToTrue = () => {
    if (open) {
      toggleOpen()
    }
  }

  return (
    <div onClick={toggleRightDrawerToTrue} style={{}}>
      {isFalse ? (
        <Container>
          <div
            style={{
              margin: 0,
            }}
          >
            <div
              style={{
                marginBottom: 0,
                marginTop: '30px',
                marginLeft: '-15px',
              }}
            >
              <InputFielAdd text='Tilføj en opgave' addToList={addTodo} />
            </div>

            <div
              style={{
                overflowY: 'auto',
                scrollPaddingLeft: 0,
                scrollMarginLeft: 0,
                height: '75vh',
                backgroundImage:
                  'repeating-linear-gradient(#e5e5e5, #e5e5e5 1px, #ffffff 1px,  #ffffff 50px )',
              }}
            >
              <div>{todos.length ? <TodoItem /> : ''}</div>
            </div>
          </div>
        </Container>
      ) : (
        <div
          style={{
            marginLeft: 22,
          }}
        >
          <div style={{ marginBottom: 0 }}>
            <InputFielAdd text='Tilføj en opgave' addToList={addTodo} />
          </div>

          <div
            style={{
              overflowY: 'auto',
              scrollPaddingLeft: 0,
              scrollMarginLeft: 0,
              height: '75vh',
              backgroundImage:
                'repeating-linear-gradient(#e5e5e5, #e5e5e5 1px, #ffffff 1px,  #ffffff 50px )',
            }}
          >
            <div>{todos.length ? <TodoItem /> : ''}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyDayItem
