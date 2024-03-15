import { createSlice } from "@reduxjs/toolkit";
import { action } from "commander";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: {},
        totalItemsCount: 0,
        deliveryAddress: {},
        paymentMethod: {},
    },
    reducers: {
        addItem: (state,action)=>{
            const item = state.items[action.payload.id];
            console.log("Insidecartslice");
            console.log(item);
            const quantity = item && item.hasOwnProperty("quantity")
            ? state.items[action.payload.id]?.quantity+1
            : 1;
            console.log(quantity);
            state.items[action.payload.id]={...action.payload, quantity};
            state.totalItemsCount=state.totalItemsCount +1;
        },
        removeItem: (state,action)=>{
            const item = state.items[action.payload];
            if(!item) return;
            if(item.quantity>1){
                item.quantity -= 1;
                state.totalItemsCount--;
            }
            else{
                state.totalItemsCount--;
                delete state.items[action.payload];
            }
        },
        clearCart: (state,action)=>{
            state.items={};
            state.totalItemsCount=0;
        },
        updatedeliveryAddress: (state,action)=>{
            state.deliveryAddress=action.payload;
        },
        updatepaymentMethod: (state,action)=>{
            state.deliveryAddress=action.payload;
        }
    }
});

export const {addItem, removeItem, clearCart, updatedeliveryAddress, updatepaymentMethod} = cartSlice.actions;

export default cartSlice.reducer; 