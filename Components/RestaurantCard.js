import Star from "../Assets/star-solid.svg";
import { Link } from "react-router-dom";
import {CLOUDINARY_CDN_URL} from "../constants"

const RestaurantCard = ({item}) =>{
    const cloudinaryImageId = item?.info?.cloudinaryImageId;
    const cuisines = item?.info?.cuisines.join(", ");


    return (<Link to={"/restaurant/" + item.info.id} className="w-[300px] h-[400px] mx-3">
        
        <div className="w-[300px] max-h-[200px]" >
            <img className="w-[300px] max-h-[200px]" src={CLOUDINARY_CDN_URL+ cloudinaryImageId}/>
        </div>

        <p>{item?.info?.name}</p>
        
        <div className="flex gap-x-2">
            <img src={Star} className="w-5" /> 
            <p className="font-bold">{item?.info?.avgRating} · </p>
            <p> {item?.info?.sla?.slaString}</p>
        </div>

        <p>{cuisines.length <= 24 ? cuisines : cuisines.substring(0,24)+"..."}</p>
        <p>{item?.info?.areaName}</p>

    </Link>)
}

export default RestaurantCard;