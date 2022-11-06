import React, {useState} from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleChange = (e) => {
        //e.preventdefault
        setValue(e.target.value)
    }

    const handleAdd = () => {
        setValue(count + value)
    }

    const handleSubtract = () => {
        setValue(count - value)
    }
    return {
            
                count,
                value,
                setValue,
                handleDecrement,
                handleIncrement,
                handleReset,
                handleChange,
                handleAdd,
                handleSubtract,
    };
        

}

export default useCounter