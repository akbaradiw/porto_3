import { createSlice } from  '@reduxjs/toolkit'

const initialState = { list: [
 
    { 
        id: 1,
        title: 'halo',
        body: 'body 1'
    },
    {
        id: 2,
        title: 'title 2',
        body: 'body 2'
 }

]}   


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
})


export default postSlice.reducer