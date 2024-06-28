
import { ActionState } from "./CustomActionstate";
 function Counter(){
    const {state,increment,decrement} = ActionState(
        {
            count:0
        }
    )
    return(<>
<p>{state}</p>
<button onClick={increment}> add</button>
<button onClick={decrement}>dec</button>
const actions={
    INCREMENT:"INCREMENT",
    DECREMENT :"DECREMENT",
    RESET:"RESET"
}
</>
    )
}
export default Counter