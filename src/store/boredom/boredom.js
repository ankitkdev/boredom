import { createSlice } from "@reduxjs/toolkit"
import { getBore } from "./actions"

const initialState = {
    data: []
}

export const boreSlice = createSlice({
    name:"bore",
    initialState,
    extraReducers:{
        [getBore.fulfilled]:(state,{payload})=>{
            state.data= payload
        }
    }
})

export default boreSlice.reducer