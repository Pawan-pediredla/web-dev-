
import { ActionState } from "./CustomActionstate";
export const Counter=()=>{
    const {state,increment,decrement} = ActionState(
        {
            count:0
        }
    )
    return(<>
<p>
   {
    state
   }
</p>
<button onClick={increment}> add</button>
<button onClick={decrement}>dec</button>
</>
    )
}