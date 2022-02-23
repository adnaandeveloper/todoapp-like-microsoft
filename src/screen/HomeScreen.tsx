import React from 'react'
import MyDayItem from '../items/MyDayItem'
import RightComponent from '../components/RightComponent'

const HomeScreen = () => {
  //const childRef = useRef()
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
