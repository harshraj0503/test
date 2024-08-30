import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:'dashboard',
    initialState:
    {
        isDashboardOpen:true,isBodyOpen:false
    },
    reducers:{
        toggleDashboard:(state,actions)=>{
            state.isDashboardOpen=!state.isDashboardOpen;
        },
        toggleBody:(state,actions)=>{
            state.isBodyOpen=!state.isBodyOpen;
        }
    }
})
export const {toggleDashboard,toggleBody}=Slice.actions;
export default Slice.reducer;