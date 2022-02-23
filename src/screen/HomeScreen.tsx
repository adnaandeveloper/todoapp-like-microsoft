import React from 'react'
import DynamicHeading from '../components/DynamicHeading'
import MyDayItem from '../items/MyDayItem'
import RightComponent from '../components/RightComponent'

import WrapperModal from '../components/Drawers/WrapperModal'

const HomeScreen = () => {
  return (
    <>
      <div style={{}}>
        <RightComponent />
      </div>

      <MyDayItem />
    </>
  )
}

export default HomeScreen
