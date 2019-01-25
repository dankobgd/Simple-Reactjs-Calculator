import React, { useState, useEffect, useRef } from 'react'


function AutoScalingText({ children }) {
  const [scale, setScale] = useState(1)
  const node = useRef(null)

  useEffect(() => {
    const parentNode = node.current.parentNode
    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.current.offsetWidth
    const actualScale = availableWidth / actualWidth

    if (scale === actualScale) {
      return
    }

    if (actualScale < 1) {
      setScale(actualScale)
    } else if (scale < 1) {
      setScale(1)
    }
  })

  return (
    <div
      className="auto-scaling-text"
      style={{ transform: `scale(${scale}, ${scale})` }}
      ref={node}
    >
      {children}
    </div>
  )

}


export default AutoScalingText
