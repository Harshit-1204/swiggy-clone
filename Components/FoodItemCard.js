import { CLOUDINARY_CDN_URL } from "../constants";
import Veg from "../Assets/green.svg";
import Non_veg from "../Assets/red.svg";
import Star from "../Assets/star-solid.svg";
import { useState } from "react";
import { addItem, deleteItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const FoodItemCard = ({ item }) => {

  const dispatch = useDispatch();

  function addItemToCart(item){
    dispatch(addItem(item));
    setIsAdded(true);
  }

  function removeItemFromCart(item){
    dispatch(deleteItem(item));
    setIsAdded(false);
  }

  const [isAdded, setIsAdded] = useState(false);

  const [description, setDescription] = useState(item?.card?.info?.description?.substring(0,40));

  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false);

  return (
    <>
      <div className="flex justify-around mt-4">
        <div className="w-[78%] flex flex-col ">
          <div className="flex gap-x-1 md:gap-x-2">
            <img
              src={
                item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? Veg
                  : Non_veg
              }
              className="w-2 md:w-4"
            />
            {item?.card?.info?.bestseller && <p className="font-bold text-sm md:text-base">Bestseller</p>}
          </div>
          <p className="font-bold text-sm  md:text-base">{item?.card?.info?.name}</p>
          {/* <p>₹ {(item.card.info.price)/100}</p> */}
          {item.card.info.price ? (
            <p className="font-bold text-sm md:text-base">₹ {item.card.info.price / 100}</p>
          ) : (
            <p className="font-bold text-sm md:text-base">₹ {item.card.info.defaultPrice / 100}</p>
          )}

          {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
            <div className="flex gap-x-1 md:gap-x-2">
              <img src={Star} className="w-2 md:w-4" />
              <p>
                <span className="font-bold text-xs md:text-base">{item?.card?.info?.ratings?.aggregatedRating?.rating} (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
              </p>
            </div>
          ) : (
            ""
          )}

          <p className="text-xs md:text-sm">{description}
            {item?.card?.info?.description && <span>{
            isFullDescriptionVisible ? <span onClick={()=>{
              setDescription(item?.card?.info?.description?.substring(0,40));
              setIsFullDescriptionVisible(false);
            }} className="font-bold">...less</span> :
            <span onClick={()=>{
              setDescription(item?.card?.info?.description);
              setIsFullDescriptionVisible(true);
            }} className="font-bold">...more</span> 
            }</span>}
          </p>
        </div>

        <div className="w-20 md:w-40  flex flex-col gap-y-2 md:gap-y-4">
          {item?.card?.info?.imageId ? (
            <img
              className="w-14 h-14 md:w-36 md:h-36  mx-auto rounded-xl object-cover shadow-sm"
              src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId}
              loading="lazy"
            ></img>
          ) : (
            ""
          )}

          {isAdded ? <button className="px-2 md:px-3 py-1 bg-red-400 w-16 md:w-32 mx-auto rounded-lg text-xs md:text-base" onClick={()=> {removeItemFromCart(item)}}>Remove</button>:
           <button className="px-1.5 md:px-3 py-1 bg-green-500 w-14 md:w-32 mx-auto rounded-lg text-xs md:text-base" onClick={()=> addItemToCart(item)}>ADD</button>}
          
        </div>
      </div>
      <div className=" h-1 bg-gray-400 my-2"></div>
    </>
  );
};

export default FoodItemCard;
