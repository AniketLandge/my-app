import React from 'react'

function Count({text, value}) {
    console.log(`count component render for ${text}`)
  return (
    <div>Count for {text} - {value}</div>
  )
}

export default React.memo(Count);