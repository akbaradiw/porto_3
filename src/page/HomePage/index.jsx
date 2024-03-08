import React from "react"
import { useSelector, useDispatch } from 'react-redux'
const HomePage = () => {
 const counter = useSelector(state => state.counter.value)  
    const dispatch = useDispatch() 


    return (
        <div>
            <h1>HomePage</h1>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: 'counter/increment'})}>+</button>
            <button onClick={() => dispatch({type: 'counter/decrement'})}>-</button>
        </div>
    )
}

export default HomePage