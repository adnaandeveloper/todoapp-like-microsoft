import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DynamicHeading from './components/DynamicHeading'
import MailMarkeretMmedFlagScreen from './screen/MailMarkeretMmedFlagScreen'
import PlanlagtScreen from './screen/PlanlagtScreen'
import VigtigtScreen from './screen/VigtigtScreen'
import TildeltMigScreen from './screen/TildeltMigScreen'
import ItemList from './components/ItemList'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
