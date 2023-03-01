import React, { useReducer } from 'react';

const reducer =(state, action)=>{
if(action.value==="INC"){
    return state+1
}
if(action.value==="DEC"){
    return state-1
}
    return state
}

const UseReducer = () => {

   const [state, dispatch]= useReducer(reducer, 0);

    return (
        <div>
            <h1>Using useReducer()</h1>
            <h3>{state}</h3>
            <button onClick={()=>dispatch({value:"INC"})}>INCREMENT</button>
            <button onClick={()=>dispatch({value:"DEC"})}>DECREMENT</button>
        </div>
    );
};

export default UseReducer;