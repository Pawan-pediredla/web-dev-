import { useActionState } from './useActionState';
function Counter() {
  const { state, increment, decrement, reset } = useActionState({ count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
