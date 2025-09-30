import { configureStore } from "@reduxjs/toolkit";
import product_slice from "./slices/productSlice"
const store= configureStore({
    reducer:{
        products:product_slice
    }
})
export default store;