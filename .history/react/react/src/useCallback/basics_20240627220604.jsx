import { useCallback, useState } from "react"
function Expensv({click}){
    return(
        <>
        <button
        onClick={click}
        ></button>
        </>
    )
}
export function Basic(){
    
    const [count,setCount] =useState(0);
    const [value,setValue] =useState('')
   const handleclick =useCallback(()=>{
    setCount(count+1)
   },[count])
   return(
<>
<Expensv click={handleclick}/>
<input onChange={(e)=>setValue(e.target.value)}/>
</>
    )
}