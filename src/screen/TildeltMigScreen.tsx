import { Button } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'
import tilMig from '../images/tilMig.jpg'

const PlanlagtScreen = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div>
        <Box>
          <img src={tilMig} alt='tilMig' />
        </Box>

        <p
          style={{
            fontSize: '2rem',
            lineHeight: '1.5',
            textAlign: 'center',
            color: '#767678',
          }}
        >
          Opgaver, der er tildelt dig i To Do eller <br /> Planner, vises her
        </p>
      </div>
    </div>
  )
}

export default PlanlagtScreen
