import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems: [],
    },
    reducers:{
        addItem: (state,action)=>{
            state.cartItems.push({...action.payload, quantity : 1});
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
        },
        addQuantity: (state,action) =>{
            state.cartItems.map((item)=>{
                if(item.card.info.id == action.payload.card.info.id){
                    item.quantity = item.quantity + 1;
                }
            })
        },
        removeQuantity: (state,action) =>{
            state.cartItems.map((item)=>{
                if(item.card.info.id == action.payload.card.info.id){
                    item.quantity = item.quantity - 1;
                }
            })
        }
    }
})
export const {addItem,deleteItem,clearCart,addQuantity,removeQuantity} = cartSlice.actions;
export default cartSlice.reducer;