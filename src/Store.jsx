import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slices/CustomerSlice'

export const Store = configureStore({
    devTools:true,
    reducer:{
        customers:customerReducer
    }
})