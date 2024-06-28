function useRef(intialvalue){
    const refObj = {
        current:intialvalue
    }
    return refObj
}

const ref = useRef(null)
ref.cu