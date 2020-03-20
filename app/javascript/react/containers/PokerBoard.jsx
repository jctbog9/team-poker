import React from 'react'

import PlayerIcon from '../components/PlayerIcon';

const App = (props) => {
  return (
    <div>
      <div className="table-row">
        <PlayerIcon />
        <PlayerIcon />
        <PlayerIcon />
      </div>
      <div className="table-row mid-row">
        <PlayerIcon />
        <PlayerIcon />
      </div>
      <div className="table-row">
        <PlayerIcon />
        <PlayerIcon />
        <PlayerIcon />
      </div>
    </div>
  )
}

export default App;