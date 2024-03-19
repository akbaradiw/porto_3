import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../redux/features/counter/counterSlice"
import PostFeature from "../../component/PostFeature"
import ShowMenu from "../../component/ShowMenu"
const HomePage = () => {
 const counter = useSelector(state => state.counter.value)  
const dispatch = useDispatch()

const handleAdd = () => {
    dispatch(increment())
    console.log(handleAdd)
}

const handleMinus = () => {
    dispatch(decrement())
}





    return (
        <div>
            <h1>HomePage</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>tambah</button>
            <button onClick={handleMinus}>kurang</button>
            <PostFeature />
            <ShowMenu/>

        </div>
    )
}

export default HomePage