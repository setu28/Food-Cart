import { useState } from "react";
import { useEffect } from "react";
import { values } from "regenerator-runtime";
import { FETCH_MENU_URL } from "../utils/Constant";
const useRestaurant = (resid) =>{
    const [restaurant, setrestaurant] = useState(null);
    useEffect(()=>{
        //API CALL
        getResturantsInfo();
    },[]);

    async function getResturantsInfo(){
        try{
            const data = await fetch(FETCH_MENU_URL  +
                resid
                );
                const json = await data.json();
                const menuItemList = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
                const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
                //console.log(json);
                //console.log(json.data.cards[0].card.card.info);
                //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
                console.log(menuItemList);
                //setrestaurant(json.data.cards[0].card.card.info);
                const menu = menuItemList.map(item=>{
                    if(item.card.card["@type"] == itemCategory || item.card.card["@type"] == NestedItemCategory){
                        return item.card.card;
                    }

                })
                const modifieddata = {
                    info: json.data.cards[0].card.card.info,
                    menu: menu.filter(value => value !== undefined)
                };
                console.log('Menu is fine');
                console.log(modifieddata);
                setrestaurant(modifieddata);
                

        }catch(error){
            console.log(error);

        }
        


    }

    return restaurant;
}



export default useRestaurant;