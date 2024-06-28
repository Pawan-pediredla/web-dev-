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
    return(
<>
<expensv cl />
<input onChange={(e)=>setValue(e.target.value)}/>
</>
    )
}