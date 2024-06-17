import RestaurantSubItem from "./RestaurantSubItem";
import { useState } from "react";

const RestaurantItem = ({restaurntMenu}) => {

    const [isVisible, setIsVisible] = useState(-1);
     
    return <>
        <div>
            {
                restaurntMenu.map((item,index)=>{
                    return (<RestaurantSubItem item={item} key={index} isVisible={isVisible} setIsVisible={setIsVisible} index={index}/>);
                })
            }
          </div>
    </>
}

export default RestaurantItem;