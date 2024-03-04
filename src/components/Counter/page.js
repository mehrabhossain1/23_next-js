"use client"

import React, { useState } from 'react';

const CounterComponent = () => {
    const [counter, setCounter] = useState(0)

    

    return (
        <div>
            <h1>{counter}</h1>
            <button className='border bg-green-500 p-2' onClick={() => {setCounter(counter + 1)}}>Increase</button>
            <button className='border bg-red-500 p-2' onClick={() => {setCounter(counter - 1)}}>Decrease</button>
        </div>
    );
};

export default CounterComponent;