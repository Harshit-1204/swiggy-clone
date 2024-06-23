import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
    name: "user",
    initialState: {
        isOnline : true,
    },
    reducers :{
        isOnline :  (state,action) =>{
            state.isOnline = action.payload;
        },
        isOffline : (state,action)=>{
            state.isOnline = action.payload;
        }
    }
})

export const {isOffline, isOnline} = userInfo.actions;
export default userInfo.reducer;