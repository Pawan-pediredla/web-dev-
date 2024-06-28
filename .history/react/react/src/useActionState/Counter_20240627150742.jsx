import React from "react";
import { ActionState } from "./CustomActionstate";
export const Counter=()=>{
    const {state,reset,increment,decrement} = ActionState(
        {
            count:0
        }
    )
    return(
<>
<p>
   {
    state
   }
</p>
<button> add</button>
</>
    )
}