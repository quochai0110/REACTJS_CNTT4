import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStudent";

export const rootReducer= combineReducers({
    counter: reducerCounter,
    students: reducerStudents
})