import React from 'react'

function Title() {
    console.log("Title component render");
  return (
    <h2>UseCallback hook</h2>
  )
}

export default React.memo(Title)