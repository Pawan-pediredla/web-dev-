import React, { useRef } from "react";
import { Child } from "./child";
export default function Parent(){
    const ref = useRef(null);
    return(
        <Child/>
    )
}