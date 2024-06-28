import React, { useEffect } from "react";
import { useRef } from "react";
export const Refusing =()=>{
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <>
        <input type="text"  ref={inputRef}/>
        <button onClick={()=>inputRef.current.focus()} >
            focus input
        </button>
        </>
    )
}