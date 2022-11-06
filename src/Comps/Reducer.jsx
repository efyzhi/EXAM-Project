import React, {useReducer} from 'react'


const initialState = { count: 10, value: 10};

function reducer(state, action){
    switch(action.type){
    case 'Increment':{
      return {...state, count: state.count + 1}
    };
      case 'Decrement':{
        return {...state, count: state.count - 1}
      };
      case 'Add': {
        return {...state, count: state.count + parseInt(state.value, 10)}
      }
      case 'Subtract': {
        return {...state, count: state.count - parseInt(state.value, 10)}
      }
      case 'changeValue':{
        return {...state, 
            value:action.payload}
      }
      case 'Reset':{
        return initialState
      }
  } 

  }

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
  
function handleAddition(){
dispatch({
      type: 'Add'
})
}

function handleSubtraction(){
  if(state.value)
  dispatch({
        type: 'Subtract'
  })
  }

function handleChange(e){
    e.preventdefault()
    dispatch({
      type: 'count',
      payload: 'e.target.value'
    })
}

  function Reset() {
    dispatch({
        type:'Reset'
    })
  }
    return {
        state, 
        Increment, 
        Decrement, 
        handleAddition, 
        handleSubtraction, 
        handleChange, 
        Reset,
  }
  } 