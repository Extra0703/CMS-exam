import React, { useState } from 'react'
import './Sass/Question1.scss'

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
      <div className="format">
        <p className="badge">
          Count: <span>{count}</span>
        </p>
      </div>
    </div>
  )
}

export default Question1
