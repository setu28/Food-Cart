import React from "react";
import { useState } from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN } from "../utils/Constant";

const MenuItem = ({ items }) =>{
    
    const { id, name, description, price, imageId } = items;
    const[itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();
    const handleAddItem = (items) =>{
        dispatch(addItem(items));
        setItemCount(itemCount+1);
    }
    const handleRemoveItem = (id) =>{
        dispatch(removeItem(id));
        let updatecount;
        updatecount = itemCount > 0 ? itemCount - 1 :0;
        setItemCount(updatecount);

    }

    return(
        <div className="flex justify-between basis-[848px] max-h-[180px] p-5 border-b border-gray" key={id}>
            <div className="flex flex-col basis-[400px]">
                <h3 className="font-bold text-lg w-3/5">{name}</h3>
                    <p className="mt-1 text-base font-normal">
                        {price}
                    </p>
                    <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
                        {description}
                    </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                        {imageId && (
                            <img className="w-[118px] h-[96px]"
                            src={ITEM_IMG_CDN + imageId}
                            alt={items?.name}/>
                        )}
            </div>
            <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
                <button
                    className="text-xl text-gray-count font-semibold"
                    onClick={() => handleRemoveItem(id)}
                    >
                    {" "}
                    -{" "}
                </button>
                <span className="text-base text-green"> {itemCount} </span>
                    <button
                        className="text-green text-xl"
                        onClick={() => handleAddItem(items)}
                    >
                    {" "}
                    +{" "}
                    </button>
            </div>
        </div>
    )

}

export default MenuItem;