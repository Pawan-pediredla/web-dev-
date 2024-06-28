import { useCallback, useState } from "react"
function Expensv({click}){
    return(
        <>
        <button
        onClick={click}
        >
            click
        </button>
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
<p>
    {count}
</p>
<input value={value} onChange={(e)=>setValue(e.target.value)}/>
</>
    )
}