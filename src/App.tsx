import React from 'react'
import DynamicHeading from './components/DynamicHeading'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemList from './components/ItemList'
import TestComponenet from './components/TestComponenet'
import WrapperModal from './components/WrapperModal'
import MailMarkeretMmedFlagScreen from './screen/MailMarkeretMmedFlagScreen'
import PlanlagtScreen from './screen/PlanlagtScreen'
import TildeltMigScreen from './screen/TildeltMigScreen'
import VigtigtScreen from './screen/VigtigtScreen'
import HomeScreen from './screen/HomeScreen'

import './App.css'
import RightWrapperModal from './components/RightWrapperModal'
import TodoDrawer from './components/TodoDrawer'

const App = () => {
  return (
    <BrowserRouter>
      <WrapperModal>
        <RightWrapperModal>
          <TodoDrawer>
            <DynamicHeading />
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route
                path='Mail Markeret Med Flag'
                element={<MailMarkeretMmedFlagScreen />}
              />
              <Route path='Planlagt' element={<PlanlagtScreen />} />
              <Route path='Vigtigt' element={<VigtigtScreen />} />
              <Route path='Tilmeldt Mig' element={<TildeltMigScreen />} />
              <Route path='Opgaver' element={<HomeScreen />} />
            </Routes>
          </TodoDrawer>
        </RightWrapperModal>
      </WrapperModal>
    </BrowserRouter>
  )
}

export default App
