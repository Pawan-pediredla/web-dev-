import useReducer  from "react"
import { reducer } from "./Actionstate"

export function ActionState(intialstate){
    const [state,dispatch] = useReducer(reducer,intialstate)
    const increment  =()=>{
dispatch(
    {
        type:'INCREMENT'
    }
)        

    }
const decrement =()=>{
    dispatch(
        {
            type:''
        }
    )
}
}