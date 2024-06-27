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


  return (
    <>
      <div className="flex justify-around mt-4">
        <div className="w-[78%] flex flex-col ">
          <div className="flex gap-x-2">
            <img
              src={
                item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                  ? Veg
                  : Non_veg
              }
              className="w-4"
            />
            {item?.card?.info?.bestseller && <p className="font-bold text-base">Bestseller</p>}
          </div>
          <p className="font-bold text-base">{item?.card?.info?.name}</p>
          {/* <p>₹ {(item.card.info.price)/100}</p> */}
          {item.card.info.price ? (
            <p className="font-bold text-base">₹ {item.card.info.price / 100}</p>
          ) : (
            <p className="font-bold text-base">₹ {item.card.info.defaultPrice / 100}</p>
          )}

          {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
            <div className="flex gap-x-2">
              <img src={Star} className="w-4" />
              <p>
                <span className="font-bold text-base">{item?.card?.info?.ratings?.aggregatedRating?.rating}</span> (
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
            </div>
          ) : (
            ""
          )}

          <p className="text-sm">{item?.card?.info?.description}</p>
        </div>

        <div className="w-40  flex flex-col gap-y-4">
          {item?.card?.info?.imageId ? (
            <img
              className="w-36 h-36  mx-auto rounded-xl object-cover shadow-sm"
              src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId}
            ></img>
          ) : (
            ""
          )}

          {isAdded ? <button className="px-3 py-1 bg-red-400 w-32 mx-auto rounded-lg" onClick={()=> {removeItemFromCart(item)}}>Remove</button>:
           <button className="px-3 py-1 bg-green-500 w-32 mx-auto rounded-lg" onClick={()=> addItemToCart(item)}>ADD</button>}
          
        </div>
      </div>
      <div className=" h-1 bg-gray-400 my-2"></div>
    </>
  );
};

export default FoodItemCard;
