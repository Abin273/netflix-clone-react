import React from 'react'
import Login from '../login/Login'
import Browse from '../browse/Browse'
import Header from '../header/Header'
import { useSelector } from 'react-redux'

const Body = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <Header />
      { user
          ?
          <Browse />
          :
          <Login />
      }
    </div>
  )
}

export default Body
