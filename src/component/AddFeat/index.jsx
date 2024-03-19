import React from 'react'
import { useState } from 'react'
import { update } from '../../redux/features/menu/menuSlice'
import { useDispatch } from 'react-redux'

const AddFeat = () => {
 const [food, setFood] = useState('')
 const [drink, setDrink] = useState('')
 const dispatch = useDispatch()
 
 const updateMenu = (e) => {
    e.preventDefault()
    dispatch(update({food, drink}))
 }
 
    return (
        <div>
            <h1>from</h1>
            <form onSubmit={updateMenu} >
                <input placeholder='food' type="text" value={food} onChange={e => setFood(e.target.value)} />
                <input placeholder='drink' type="text" value={drink} onChange={e => setDrink(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
    )
}
export default AddFeat