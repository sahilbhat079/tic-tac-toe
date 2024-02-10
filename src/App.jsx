import Gameboard from "./components/Gameboard"
import Player from "./components/Player"
import Log from "./components/Log"
import { useState } from "react"
import {WinnnigCommbination} from "./assets/winnigcombinations"
import Gameover from "./components/Gameover"
const PLAYERS ={
  X:'player 1',
  O:'player 2'
}
const initialGameBoard =[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function derivedplayer(gameturns){
  let currentplayer = 'X'
  if (gameturns.length > 0 && gameturns[0].player === 'X') {
    currentplayer = 'O'
  }
  return currentplayer;
}

function derivedWinner(gameboard,players){
  let winner;
for (const combinations of WinnnigCommbination){
  const firstsquaresymbol=gameboard[combinations[0].row][combinations[0].col]
  const secondsquaresymbol=gameboard[combinations[1].row][combinations[1].col]
  const thirdsquaresymbol=gameboard[combinations[2].row][combinations[2].col]

  if(firstsquaresymbol && firstsquaresymbol==secondsquaresymbol && firstsquaresymbol==thirdsquaresymbol){
  winner=players[firstsquaresymbol];
  }
}

return winner
}

function deriveGameBoard(gameturns){
  // deeep copy 
// let gameboard=initialGameBoard;
// both work
 let gameboard=JSON.parse(JSON.stringify(initialGameBoard));
 //  let gameboard=[...initialGameBoard].map(innerarray=>[...innerarray]);
 
 for (const turn of gameturns){
     const{square,player}=turn;
     const{row,col}=square;
     gameboard[row][col]=player;
 }
  return gameboard;
}




function App() {
const [gameturns,setgameturns]=useState([]);

const [players,setplayers] = useState(PLAYERS);

const activeplayer = derivedplayer(gameturns);

const gameboard = deriveGameBoard(gameturns);

const winner =derivedWinner(gameboard,players);

const hasdraw=gameturns.length===9&& !winner;


function handlesquare(rowindex,colindex){ 
   setgameturns((prev) => {
    
    const currentplayer=derivedplayer(prev);

    const updatedturns = [ 
      { 
        square: {
          row: rowindex, 
          col: colindex
        }, 
       
        player: currentplayer
      }, ...prev];
    return updatedturns;
  })
}

function handlerematch(){
  setgameturns([]);
}

function handleplayername(symbol,newname){
setplayers(prevplayer=>{
return {
  ...prevplayer,
  [symbol]: newname
};
}); 
}






//retun type....
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol='X' isactive={activeplayer==='X'} onchangename={handleplayername}/>
          <Player name={PLAYERS.O} symbol='O' isactive={activeplayer==='O'} onchangename={handleplayername}/>
          </ol>
          {(winner ||hasdraw) && <Gameover winner={winner} handlerestart={handlerematch}/>}
        <Gameboard playersymbol={handlesquare} board={gameboard} ></Gameboard>
      </div>
      <Log turns={gameturns}/>

      
    </main>
  )
}

export default App