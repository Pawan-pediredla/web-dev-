import React, { useEffect } from "react";
import { useRef } from "react";
export const Refusing =()=>{
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return(
        <>
        <input type="text"   />
        <button onClick={()=>inputRef.current.focus()} >
            focus input
        </button>
        </>
    )
}