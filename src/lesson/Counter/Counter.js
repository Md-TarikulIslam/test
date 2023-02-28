import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount]=useState(0);

    const increment= ()=>{
        setCount (count+1)
        console.log(count)
    }
    const decrement= ()=>{
        setCount (count-1)
        console.log(count)
    }
    return (
        <div>
            <h1>Number {count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
        </div>
    );
};

export default Counter;