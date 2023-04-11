import { configureStore } from "@reduxjs/toolkit";
import boredom from "./boredom/boredom"

const store = configureStore({
    reducer:{
        bore:boredom
    }
})

export default store;