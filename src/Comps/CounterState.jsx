import useCounter from "./useCounter"
import { Helmet } from "react-helmet-async"
import '../Styles/Counter.css'

const CounterState = () => {
  const {count, handleIncrement, handleDecrement, handleReset, handleChange} = useCounter(0)
  return (
    <>
   <Helmet>
          <title>Counter App</title>
          <meta name="description" content="a simple counter app" />
          <link rel="canonical" href="/counter"/>
  </Helmet>
    <div className="counter-wrapper">
<h3 className="count"> Your Count is:{count} </h3>
          
       <div className="btns">
        <button className="btn btn-primary" onClick={handleIncrement}> Incrment </button>
        <button  className="btn btn-sec"  onClick={handleDecrement}> Decrement </button>
        <button  className="btn btn-reset"  onClick={handleReset}> Reset </button>
          </div> 
      <div className="box">
     <input
        type="number"
        value={count}
         onChange={handleChange}
            />
      </div> 

  </div>
          
    </>
  )
}

export default CounterState