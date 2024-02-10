import React from 'react'

export default function Gameover({winner,handlerestart}) {
  return (

    <div id="game-over">
        <h2>
        Game over!
        </h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>it's a draw </p>}
      
        <p>
            <button onClick={handlerestart}>Rematch</button>
        </p>
    </div>
  )
}
