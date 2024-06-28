import { useReducer } from 'react';
import red
import { actions } from './actions';

export function useActionState(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: actions.INCREMENT });
  const decrement = () => dispatch({ type: actions.DECREMENT });
  const reset = () => dispatch({ type: actions.RESET });

  return {
    state,
    increment,
    decrement,
    reset
  };
}
