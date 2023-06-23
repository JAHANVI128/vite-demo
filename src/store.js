import { configureStore } from "@reduxjs/toolkit";
import userReducer from './redux/UserSlice'

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})