import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import postReducer from './features/post/postSlice'
import menuReducer from './features/menu/menuSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
        menu: menuReducer
        
    }
})