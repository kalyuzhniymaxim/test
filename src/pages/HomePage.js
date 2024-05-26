import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Navigate} from 'react-router-dom'


function HomePage() {
  return (
    <Navigate to= '/login'/>
  )
}

export default HomePage