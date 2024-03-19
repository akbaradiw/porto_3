import React from "react"
import AddFeat from "../../component/AddFeat"
import { useSelector } from "react-redux"
const MenuPage = () => {
 const {food , drink } = useSelector(state => state.menu)
    return (
        <div>
            <h1>MenuPage</h1>
            <p>{food}</p>
            <p>{drink}</p>
            <AddFeat />
        </div>
    )
}

export default MenuPage