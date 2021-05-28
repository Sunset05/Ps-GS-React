import React from 'react'

export default function Button( { counter, setCounter}) {

    const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={ () => handleClick() }>
            {counter}
        </button>
    )
}
