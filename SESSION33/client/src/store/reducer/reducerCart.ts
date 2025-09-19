// reducer là những hàm
type Action={
    type:string,
    payload:any
}
const initialState={
    cart:[
        {
            id:1,
            title:"Cake",
            price: 10,
            quantity:3
        },
         {
            id:2,
            title:"Hamburger",
            price: 15,
            quantity:5
        }
    ],
    
}
export const reducerCart= (state=initialState, action:Action)=>{
   switch (action.type) {
    case "INCREMENT":
        console.log("tăng giá trị",action.payload);
        let index= state.cart.findIndex(item=> item.id==action.payload.id);
        state.cart[index].quantity+=1;
       return JSON.parse(JSON.stringify(state));
   
    default:
       return state;
   }
}