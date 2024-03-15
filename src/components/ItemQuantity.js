import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemQuantiy = ({item}) =>{
    const dispatch = useDispatch();
    console.log(item);
    console.log("Hello ji");

    return(
        <div className="flex border border-gray w-16 justify-around items-center">
            <button
                onClick={()=>{
                    dispatch(removeItem(item.id));
                }}
                className="text-xl"
            >
                -
            </button>
            <p className="text-green text-sm">{item.quantity}</p>
            <button
              onClick={()=>{
                 dispatch(addItem(item));
              }}
            >
                +
            </button>
        </div>
    );
};

export default ItemQuantiy;