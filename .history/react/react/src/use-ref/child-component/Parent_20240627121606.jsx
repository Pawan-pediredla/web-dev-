import React, { useRef } from "react";
import { Child } from "./child";
export default function Parent(){
    const ref = useRef(null);
    const handleClick=()=>{
        ref.current.focus()
    }
    return(
        <Child ref={ref}/>
        <button/>
    )
}