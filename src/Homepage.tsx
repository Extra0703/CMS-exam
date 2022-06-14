import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="Question1">Question1</Link>
      <Link to="Question2">Question2</Link>
    </div>
  )
}

export default Homepage
