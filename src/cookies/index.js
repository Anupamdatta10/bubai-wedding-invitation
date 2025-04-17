import React from 'react'
import{Link} from 'react-router-dom'

export default function home() {
  return (
    <div>index
      <h1>Welcome to the Cookie Page</h1>
      <p>This is a simple cookie page.</p>
      <Link to="/whiteboard">Go to Whiteboard</Link>
    </div>
  )
}
