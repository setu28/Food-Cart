import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemQuantiy from "./ItemQuantity";
import CartFallback from "./CartFallback";
import useItemTotal from "../utils/useItemTotal";

const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const count = useSelector((store)=> store.cart.totalItemsCount);
    const address = useSelector((store)=> store.cart.deliveryAddress);
    const payment = useSelector((store)=> store.cart.paymentMethod);
    const dispatch = useDispatch();
    const getItemTotal = useItemTotal();
    console.log("Heloo");
    console.log(cartItems);

    const HandleClearCart = () =>{
        console.log("Hello");
        dispatch(clearCart());
    }

    return Object.values(cartItems).length > 0 ? (
        <div className="bg-white drop-shadow-md flex-2 p-6 w-auto">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
                <button
                    className="w-[80px] h-[22px] rounded-md  bg-red-500 text-red text-sm"
                    onClick={() => HandleClearCart()}
                >
                    Clear Cart
                </button>
            </div>
            {Object.values(cartItems).map((item)=>{
                return(
                    <div className="my-3">
                        <div className="flex items-center mt-2">
                            <p className="px-2 w-48 text-sm">{item.name}</p>
                            <div className="px-5">
                                <ItemQuantiy item={item} key={item.id} />
                            </div>
                            <p className="font-thin text-sm">
                                {"$" + (item.price /100 ) * item.quantity}
                            </p>
                        </div>
                    </div>

                );
            })}
            <div className="border border-black my-2"></div>
                <div className="flex justify-between">
                <p className="font-bold text-sm">To Pay</p>
                <p className="font-bold  text-sm">{"₹ " + getItemTotal()}</p>
            </div>
        </div>
    ) : (
        <div className="container mx-auto">
            <CartFallback
                text={"Your cart is empty"} 
                btnText={"SEE RESTAURANTS NEAR YOU"}   
            />
        </div>
    );
};

export default Cart;