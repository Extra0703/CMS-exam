import React from 'react'
import { Link } from 'react-router-dom'

const Router = () => {
  return (
    <div>
      <h1>Router</h1>
      <Link to="Question1">Question1</Link>
      <Link to="Question2/Login">Question2</Link>
    </div>
  )
}

export default Router
