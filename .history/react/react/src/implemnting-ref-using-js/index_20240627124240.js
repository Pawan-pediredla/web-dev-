
function useRef(intialvalue){
    const refObj = {
        current:intialvalue
    }
    return refObj


const ref = useRef(null)
console.log(ref.current)
ref.current = document.getElementById('cont');
console.log(ref.current)