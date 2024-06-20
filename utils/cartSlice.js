import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems: [],
    },
    reducers:{
        addItem: (state,action)=>{
            state.cartItems.push(action.payload);
        },
        deleteItem: (state,action)=>{
            const newCart = state.cartItems.filter((item)=>{
                return item.card.info.id != action.payload.card.info.id;
            })

            // console.log(current(state));

            state.cartItems = newCart;
        },
        clearCart: (state)=>{
            state.cartItems = []
        }
    }
})
export const {addItem,deleteItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;