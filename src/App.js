import React, { useState } from 'react'
import { useToggle } from './useToggle'

export default function () {
  const [isVisible, toggle] = useToggle()
  return (
    <div>
      <button onClick={
        toggle
      }>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>HELLo</h1>}
    </div>
  )
}
