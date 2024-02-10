import React from 'react'
import { useState } from 'react'
import { setlocal,getlocal} from  '../assets/utilities'

export default function Player({name,symbol, isactive, onchangename }) {
   
  const [finalname, setfinalname] = useState(getlocal(symbol,name));
  const [isEditing, setisEditing] = useState(false); 
  
  // console.log(invalidinput);
  
  function ChangePlayerName(){
    setisEditing((Edit) => !Edit);
    if (isEditing){
      onchangename(symbol,finalname);
    }
    setlocal(finalname,symbol); 
  }

function handlechange(event) {
    setfinalname(event.target.value); 
  }
   
function checkname(finalname,symbol,name)
  {
const player2symbol=symbol=='X'?'O':'X' ;
const player2name=getlocal(player2symbol,name);
// console.log(player2name);
if (finalname==player2name){
    return true;
}
return  false;
}

  let invalidinput=checkname(finalname,symbol,name)
  let playerName = <span className="player-name">{finalname}</span>;
  let btncaption = "Edit";
  if (isEditing) {
    playerName = <input type="text" required value={finalname} className= {invalidinput?'inputinvalid':undefined} onChange={handlechange} onFocus={(e) => e.target.value = " "} />;  
    btncaption = "Save";
  }
  
  
  return (

    <li className={isactive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={ChangePlayerName} disabled={invalidinput}>
          {btncaption}
        </button  >
      </span>
    </li>

  )
}
