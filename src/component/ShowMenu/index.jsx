import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {getMenu } from "../../redux/features/menu/menuSlice"
import { useEffect } from "react"
const ShowMenu = () => {
const dispatch = useDispatch()
 useEffect(() => {
    dispatch(getMenu())
 })

    return (
        <div>
            <h1>from</h1>
        </div>
    )
}
export default ShowMenu