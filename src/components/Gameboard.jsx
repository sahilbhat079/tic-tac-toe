import React from 'react'
export default function Gameboard({playersymbol,board}) {
  return (
    <ol id="game-board">
        {board.map((row,rowindex)=>{
return <li key={rowindex}>
    <ol>
        {row.map((col,colindex)=>{
            return<li key={colindex}><button onClick={()=>{playersymbol(rowindex,colindex)}} disabled={col!=null}>{col} </button></li>
        })} 
    </ol>
</li>
        })}
    </ol>
  )
}
