import RestaurantSubItem from "./RestaurantSubItem";
import { useState } from "react";

const RestaurantItem = ({restaurntMenu}) => {

    const [isVisible, setIsVisible] = useState(-1);
     
    return <>
        <div>
            {
                restaurntMenu.map((item,index)=>{
                    // console.log(item.card.card.itemCards);
                    if(item.card.card.itemCards){
                    return (<RestaurantSubItem item={item} key={item.card.card.title} isVisible={isVisible} setIsVisible={setIsVisible} index={index}/>);
                    }
                })
            }
          </div>
    </>
}

export default RestaurantItem;