import React, {useState} from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(0)

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
        setCount(Number(e.target.value))
    }
    return {
            
                count,
                handleDecrement,
                handleIncrement,
                handleReset,
                handleChange,
    };
}
export default useCounter