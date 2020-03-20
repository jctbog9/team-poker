import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SigninForm = () => {
  const [roomNumber, setRoomNumber] = useState('')
  const handleRoomNumberChange = (event) => {
    setRoomNumber(event.target.value)
  }
  return (
    <div className="signin-form">
      <div className="form-container">
        <div className="form-row">
          <label>Name:</label>
          <input className="text-input" type="text"></input>
        </div>
        <div className="form-row">
          <label>Room Number:</label>
          <input className="text-input" type="text" value={roomNumber} onChange={handleRoomNumberChange}></input>
        </div>
        { roomNumber ? (
          <Link to={`/room/${roomNumber}`}>
            <button className="form-button">Join Game</button>
          </Link>
        ) : (
          <button className="form-button">Join Game</button>
        )}
        
      </div>
    </div>
  )
}

export default SigninForm;