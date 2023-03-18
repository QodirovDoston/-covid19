import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:"count",
    initialState: {count:0},
    reducers:{
        incrument:(state)=>{
            state.count +=1
        },
        decroment:(state)=>{
            state.count -=1
        },
        reset:(state)=>{
            state.count =1
        },
        // value:(state)=>{
        //     state.count
        // },
        addValue:(state)=>{
            state.count += value.state
        }
    }
})
export const {incrument, decroment, reset , value, addValue } = countSlice.actions
export default countSlice.reducer