import React, { useState } from 'react'
import './Sass/Question1.css'

const Question1 = () => {
  const [count, setCount] = useState<number>(0)
  const handleCountChange = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className="question1">
      <button className="button" onClick={handleCountChange}>
        Click Me
      </button>
      <p className="badge">
        Count: <span>{count}</span>
      </p>
    </div>
  )
}

export default Question1
