import useReducer  from "react"
import { reducer } from "./Actionstate"
import { Reducer } from "./Actionstate"
export function ActionState(intialstate){
    const [state,dispatch] = useReducer(Reducer)
    const increment  =()=>{
        
    }
}