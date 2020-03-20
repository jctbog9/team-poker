import React from 'react'

function PlayerIcon({ isFull }) {
  return(
    <div className={isFull ? "full-container" : "empty-container"}>
    </div>
  )
}

export default PlayerIcon
