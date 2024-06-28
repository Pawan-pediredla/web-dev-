
import { ActionState } from "./CustomActionstate";
 function Counter(){
    const {state,increment,decrement} = ActionState(
        {
            count:0
        }
    )
    return(<>
<p>
   {
    state
   
   + 

</p>
<button onClick={increment}> add</button>
<button onClick={decrement}>dec</button>
</>
    )
}
export default Counter