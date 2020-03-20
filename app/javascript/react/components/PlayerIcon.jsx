import React, { useState } from 'react'

function PlayerIcon() {
  const [isFull, setIsFull] = useState(false)
  const handleEmptyClick = () => {
    setIsFull(true)
  }
  return(
    <div>
      { 
      isFull ? (
          <div className="full-container">
          </div>
        ) : (
          <div className="empty-container" onClick={handleEmptyClick}>
            <i class="fas fa-plus fa-3x"></i>
          </div>
        )
      }
    </div>
  )
}

export default PlayerIcon
