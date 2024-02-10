
export function setlocal(finalname,symbol){
    localStorage.setItem(symbol,JSON.stringify(finalname));
  }
   
 export function getlocal(symbol,name){
    if(localStorage.getItem(symbol) !== null){
      return  JSON.parse(localStorage.getItem(symbol));
    }
    else{
      return name 
    }
  }
  


