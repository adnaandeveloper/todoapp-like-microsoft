import React from 'react'
import DynamicHeading from './components/DynamicHeading'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WrapperModal from './components/Drawers/WrapperModal'
import MailMarkeretMmedFlagScreen from './screen/MailMarkeretMmedFlagScreen'
import PlanlagtScreen from './screen/PlanlagtScreen'
import TildeltMigScreen from './screen/TildeltMigScreen'
import VigtigtScreen from './screen/VigtigtScreen'
import HomeScreen from './screen/HomeScreen'
import RightWrapperModal from './components/Drawers/RightWrapperModal'
import TodoDrawer from './components/TodoDrawer'

import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <WrapperModal>
        <RightWrapperModal>
          <TodoDrawer>
            <DynamicHeading />
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='Mail' element={<MailMarkeretMmedFlagScreen />} />
              <Route path='Planlagt' element={<PlanlagtScreen />} />
              <Route path='Vigtigt' element={<VigtigtScreen />} />
              <Route path='Tilmeldt' element={<TildeltMigScreen />} />
              <Route path='Opgaver' element={<HomeScreen />} />
            </Routes>
          </TodoDrawer>
        </RightWrapperModal>
      </WrapperModal>
    </BrowserRouter>
  )
}

export default App
