
import type { Action, Student } from "../../utils/types"

const inititalState:Student[]=[
    {
        id:"1",
        name:"Pham Thi Hong Nhung",
        age:19,
        gender:"Nữ",
        birthday:"13-12-2006",
        hometown:"Nam Dinh",
        address:"Nghia Hung-Nam Dinh"
    },
     {
        id:"2",
        name:"Hong Nhung",
        age:19,
        gender:"Nữ",
        birthday:"13-12-2006",
        hometown:"Nam Dinh",
        address:"Nghia Hung-Nam Dinh"
    },
    {
        id:"3",
        name:"Nhung",
        age:19,
        gender:"Nữ",
        birthday:"13-12-2006",
        hometown:"Nam Dinh",
        address:"Nghia Hung-Nam Dinh1"
    },
]

export const reducerStudent=(state=inititalState,action:Action)=>{
    switch (action.type) {
        case "ADD":
            console.log('thêm sinh viên1');

            
            return [...state,action.payload]
    
        default:
            return state;
    }
}