import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
// hàm lấy tất cả dữ liệu sản phẩm
export const getAllProduct= createAsyncThunk("getAllProduct", async ()=>{
        try {
            const res= await axios.get("http://localhost:8080/products");
            return res.data
        } catch (error) {
            console.log(error);
            
        }
})

// hàm thêm mới sản phẩm 
export const addNewProduct = createAsyncThunk("addNewProduct", async(new_product)=>{
          try {
            const res= await axios.post("http://localhost:8080/products",new_product);
            return res.data
        } catch (error) {
            console.log(error);
            
        }
})
const productSlice= createSlice({
    name:"product",
    initialState:{
     products:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.pending,()=>{

        })
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(addNewProduct.fulfilled,(state:any,action)=>{
            state.products.push(action.payload)
        })
    }
})
export default productSlice.reducer;