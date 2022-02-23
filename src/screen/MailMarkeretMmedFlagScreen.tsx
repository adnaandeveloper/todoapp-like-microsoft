import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import emailOnboarding from '../images/email-onboarding .jpg'

const MailMarkeretMmedFlagScreen = () => {
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
          <img src={emailOnboarding} alt='logo' />
        </Box>

        <p
          style={{
            fontSize: '2rem',
            lineHeight: '1.5',
            textAlign: 'center',
          }}
        >
          Vil du oprette opgaver fra meddelelser, <br /> der er markeret med
          flag?
        </p>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button variant='outlined'>Contained</Button>

          <Button
            variant='contained'
            style={{ marginLeft: '35px', marginRight: ' 11px' }}
          >
            Contained
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default MailMarkeretMmedFlagScreen
