import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
     <h2>My i phone Hunter</h2>
     <Outlet></Outlet>
    </div>
  )
}

export default Main