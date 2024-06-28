import { useCallback, useState } from "react"
function expensv({click}){
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
    
   })
   return(
<>
<expensv click={} />
<input onChange={(e)=>setValue(e.target.value)}/>
</>
    )
}