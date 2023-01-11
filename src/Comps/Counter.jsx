import Reducer from "./Reducer"
import { Helmet } from "react-helmet-async"
import '../Styles/Counter.css'


const Counter = () => {
  
  const {state, Increment, Decrement, handleChange, handleClickButton, Reset} = Reducer()

  return (
      <>
        <Helmet>
          <title>Counter App</title>
          <meta name="description" content="a simple counter app" />
          <link rel="canonical" href="/counter"/>
  </Helmet>

         <div className="counter-wrapper">
           <h1> Counter App </h1>
            <h3 className="count"> Your count is Count:{state.count} </h3>
        <div className="btns">
        <button className="btn btn-primary" onClick={Increment}> Incrment </button>
        <button className="btn btn-reset" onClick={Reset}> Reset </button>
        <button className="btn btn-sec" onClick={Decrement}> Decrement </button>
        </div> 
        
           <div className="box">
     <input
        type="number"
       value={state.value}
         onChange={handleChange}
            />
      </div>
           <div className="value-btn" > <button onClick={handleClickButton}> Set Value </button></div>
     </div>
      </>
      )
}

export default Counter