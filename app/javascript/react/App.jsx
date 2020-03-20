import React from 'react'

import PlayerIcon from './components/PlayerIcon';

const App = (props) => {
  return (
    <div>
      <div className="table-row">
        <PlayerIcon />
        <PlayerIcon 
          isFull={true}
        />
        <PlayerIcon />
      </div>
      <div className="table-row mid-row">
        <PlayerIcon 
          isFull={true}
        />
        <PlayerIcon />
      </div>
      <div className="table-row">
        <PlayerIcon 
          isFull={true}
        />
        <PlayerIcon 
          isFull={true}
        />
        <PlayerIcon 
          isFull={true}
        />
      </div>
    </div>
  )
}

export default App;
