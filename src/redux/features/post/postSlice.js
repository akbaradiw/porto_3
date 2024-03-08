import { createSlice } from  '@reduxjs/toolkit'

const initialState =  [
    { 
        id: 1,
        title: 'title 1',
        body: 'body 1'
    },
    {
        id: 2,
        title: 'title 2',
        body: 'body 2'
    },
    {
        id: 3,
        title: 'title 3',
        body: 'body 3'
    }
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
})

export const selectAllPost = (state) => state.post

export default postSlice.reducer