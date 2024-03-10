import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit'
import axios from 'axios'

export const getMenu = createAsyncThunk(
    'menu/getMenu', async () => {
        const response = await axios.get('http://localhost:3000/menu')
        return response.data
    })
const menuEntity = createEntityAdapter({
    selectId: (menu) => menu.id
})

// const menuSlice = createSlice ({
//     name: 'menu',
//     initialState: {
//         food:"melinjo",
//         drink:"susu"
//     },
//     reducers: {
//         update: (state, action) => {
//             state.food = action.payload.food
//             state.drink = action.payload.drink
//         }
//     }
// })

const menuSlice = createSlice ({
    name: 'menu',
    initialState: menuEntity.getInitialState(),
   extraReducers:{
    [getMenu.fulfilled]: (state, action) => {
        menuEntity.setAll(state, action.payload)
    }
   }
})

// export const { update } = menuSlice.actions
export const menuSelector = menuEntity.getSelectors(state => state.menu)
export default menuSlice.reducer