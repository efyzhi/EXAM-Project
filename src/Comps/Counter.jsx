import React, {useState, useReducer} from "react"
import Reducer from "./Reducer"
import useCounter from "./useCounter"
import { Helmet } from "react-helmet-async"
import '../Styles/Counter.css'


//const initialState = { count: 10, value: 10};
const Counter = () => {
  
  const {state, Increment, Decrement, handleAddition, handleSubtraction, handleChange, Reset} = Reducer({count:10, value:10})
  
  //const {count, value, setValue, handleIncrement, handleDecrement, handleReset, handleChange, handleAdd, handleSubtract} = useCounter(0)
  return (
      <>
        {/*<Helmet>
          <title>Counter App</title>
          <meta name="description" content="a simple counter app" />
          <link rel="canonical" href="/counter"/>
  </Helmet>*/} 

    <div className="counter-wrapper">
        <h1> Counter App </h1>
        <p> Count:{state.count} </p>
        <div className="btns">
        <button className="btn btn-primary" onClick={Increment}> Incrment </button>
        <button className="btn btn-reset" onClick={Reset}> Reset </button>
        <button className="btn btn-sec" onClick={Decrement}> Decrement </button>
        
        </div>

        {/*<p> Count:{count} </p>
        <button onClick={handleIncrement}> Incrment </button>
        <button onClick={handleDecrement}> Decrement </button>
        <button onClick={handleReset}> Reset </button>*/}
    
     <div className="box">
     <input
        type="number"
         value={state.quantity}
        // value={value}
         onChange={handleChange}
            />
        <button className="btn btn-add" onClick={handleAddition}>Add</button>
        <button className="btn btn-subtract" onClick={handleSubtraction}>Subtract</button>
        {/*<button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>*/}

      </div>
     </div>
      </>
      )
    
}

export default Counter