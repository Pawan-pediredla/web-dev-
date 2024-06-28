import useReducer  from "react"
import { reducer } from "./Actionstate"
import { actions } from "./action"
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
            type:'DECREMENT'
        }
    )
}
const reset  =()=>{
    dispatch(
        {
            type:'RESET'
        }
    )
}
return{
    reset,state,increment,decrement
}
}