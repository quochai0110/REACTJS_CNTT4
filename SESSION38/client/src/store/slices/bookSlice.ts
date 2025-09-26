import type { Book } from "../../components/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllBooks = createAsyncThunk("getAllBooks", async () => {
  try {
    const response = await axios.get("http://localhost:8080/books");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(response.data);
        },3000)
    })
  } catch (error) {
    console.log(error);
  }
});
export const addBook = createAsyncThunk("addBook", async (newBook: Book) =>{
    try {
        const res = await axios.post(`http://localhost:8080/books`, newBook)
        return res.data
    } catch (error) {
        console.log("Error: ", error);
        
    }
})
export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, () => {
        // ĐANG LẤY DỮ LIỆU
      })
      .addCase(getAllBooks.fulfilled, (state: any, action) => {
        // LẤY DỮ LIỆU THÀNH CÔNG
        state.loading=false;
        state.books = action.payload;
      })
      .addCase(addBook.fulfilled, (state : any, action) => {  
        state.books.push(action.payload)
      })
  },
});
export default bookSlice.reducer;
