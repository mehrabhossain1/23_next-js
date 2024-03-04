"use client"

import React, { useState } from 'react';

const CounterComponent = () => {
    const [counter, setCounter] = useState(0)

    

    return (
        <div>
            <h1>{counter}</h1>
            <button className='btn btn-info' onClick={() => {setCounter(counter + 1)}}>Increase</button>
            <button className='btn btn-info' onClick={() => {setCounter(counter - 1)}}>Decrease</button>
        </div>
    );
};

export default CounterComponent;