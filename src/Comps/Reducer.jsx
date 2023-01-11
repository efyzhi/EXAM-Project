import React, {useReducer} from 'react'


 const initialState = { count: 10, value:""};

function reducer(state, action){
    switch(action.type){
    case 'Increment':{
      return {...state, count: state.count + 1}
    };
      case 'Decrement':{
        return {...state, count: state.count - 1}
      };
        
      case 'changeValue':{
        return {...state, 
           value: action.payload}
      };
        
      case 'Reset':{
        return initialState
     };

      case "setCount":
      return { ...state, 
          count: action.payload };
    default:
      throw new Error("Invalid action type");
  }
};


  export default function Reducer(){
    const [state, dispatch] = useReducer(reducer, initialState)


    function Increment() {
      dispatch({
        type:'Increment'
    })
  }
  
  function Decrement() {
    dispatch({
        type:'Decrement'
    })
  }
  
        
function handleChange(e){
    dispatch({
      type: "changeValue", 
      payload: e.target.value
    })
}
    
    function handleClickButton() {
    dispatch({
      type: "setCount",
      payload: state.value - 0,
    });
  }; 

  function Reset() {
    dispatch({
        type:'Reset'
    })
  }
    return {
        state, 
        Increment, 
        Decrement, 
        handleChange, 
        handleClickButton, 
        Reset,
 }     
 }     