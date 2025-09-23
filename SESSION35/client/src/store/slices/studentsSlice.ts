import { createSlice } from "@reduxjs/toolkit";
import type { InitialStudentState } from "../../utils/types";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        name: "Minh Thu",
      },
      {
        id: 2,
        name: "Minh Huyền",
      },
    ],
  },
  reducers: {
    // cài đặt những action(hành động)
    addStudent:(state:InitialStudentState,action)=>{
       state.students.push(action.payload); 
    }
  },
});
// destructoring
export const {addStudent} =studentSlice.actions;
export default studentSlice.reducer;
