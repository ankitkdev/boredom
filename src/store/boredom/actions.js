import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBore = createAsyncThunk("boredom",async(page,{rejectWithValue})=>{
    try{
        const {data} = await axios.get('https://www.boredapi.com/api/activity') 
        return data;
    } catch(error){
        return rejectWithValue(error.message);
    }
});