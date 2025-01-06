import { configureStore } from "@reduxjs/toolkit";
import cartReducre from "../Slice/Slice";

 export const store = configureStore({
    reducer: {
        cart: cartReducre,
    }
 })