import {CLOUDINARY_CDN_URL} from "../constants";
import Veg from "../Assets/green.svg";
import Non_veg from "../Assets/red.svg";
import Star from "../Assets/star-solid.svg"
import { useState } from "react";



const FoodItemCard = ({item}) =>{



    return <>
        <div className="w-10/12 h-[250px] flex justify-around">
        <div className="w-[78%] flex flex-col ">
            <div className="flex gap-x-2">
                <img src={(item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? Veg : Non_veg)} className="w-4"/>
                {item?.card?.info?.bestseller && <p>Bestseller</p>}
            </div>
            <p>{item?.card?.info?.name}</p>
            <p>₹ {(item.card.info.price)/100}</p>
            <div className="flex gap-x-2">
                <img src={Star} className="w-4"/>
                <p>{item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p>
            </div>
            <p>
                {item?.card?.info?.description}                
            </p>

        </div>

        <div className="w-40  flex flex-col justify-center gap-y-8">
            <img className="w-36 h-36  mx-auto rounded-xl object-cover" src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId}></img>
            <button className="px-3 py-1 bg-green-500 w-32 mx-auto">ADD</button>
        </div>
    </div>
    <div className=" h-1 bg-gray-400 my-2"></div>
    </>
}

export default FoodItemCard;