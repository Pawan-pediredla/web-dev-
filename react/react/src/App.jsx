
import './App.css'
import Parent from './use-ref/child-component/Parent'
import { Refusing } from './use-ref/ref'
import { Basic } from './useCallback/basics'
// import { Counter } from './useActionState/Counter'

function App() {
  return(
    <>
   <Parent/>
   <Refusing/>
   <Basic/>
    </>
  )
}
export default App
