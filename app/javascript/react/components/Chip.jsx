import React from 'react'

function Chip({color, value}) {
  return(
    <div className={`chip ${color}`}>
      {value}
    </div>
  )
}

export default Chip
