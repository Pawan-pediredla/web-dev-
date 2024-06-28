
import { ActionState } from "./CustomActionstate";
 function Counter(){
    const {state,increment,decrement,reset} = ActionState(
        {
            count:0}
    )
    return(<>
<p>{state}</p>
<button onClick={increment}> add</button>
<button onClick={decrement}>dec</button>
<button onClick={reset}>Reset</button>
</>
    )
}
export default Counter