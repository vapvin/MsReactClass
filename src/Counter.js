import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const plus = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const minus = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <>
            <div>
                <h1>{number}</h1>
                <button onClick={plus}>+1</button>
                <button onClick={minus}>-1</button>
            </div>
        </>
    )
}

export default Counter;