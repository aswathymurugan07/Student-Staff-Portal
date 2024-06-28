import { configureStore } from '@reduxjs/toolkit'
import staffReducer from './reducers/staffSlice'


export const store = configureStore({
    reducer : {
        staff:staffReducer,
    },
})