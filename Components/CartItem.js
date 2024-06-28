import { CLOUDINARY_CDN_URL } from "../constants";
import Veg from "../Assets/green.svg";
import Non_veg from "../Assets/red.svg";
import Star from "../Assets/star-solid.svg";
import Plus from "../Assets/plus-solid.svg";
import Minus from "../Assets/minus-solid.svg";
import { addQuantity, deleteItem, removeQuantity } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  console.log(item);

  function removeItemFromCart(item) {
    dispatch(deleteItem(item));
  }

  function handlePlusQuantity(item) {
    dispatch(addQuantity(item));
  }

  function handleMinusQuantity(item) {
    dispatch(removeQuantity(item));
  }

  return (
    <>
      <div className="w-10/12 max-w-[720px] my-2 flex justify-around">
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
            {item?.card?.info?.bestseller && (
              <p className="font-bold text-sm md:text-base">Bestseller</p>
            )}
          </div>
          <p className="font-bold text-sm  md:text-base">
            {item?.card?.info?.name}
          </p>

          {item.card.info.price ? (
            <p className="font-bold text-sm  md:text-base">
              ₹ {item.card.info.price / 100}
            </p>
          ) : (
            <p className="font-bold text-sm  md:text-base">
              ₹ {item.card.info.defaultPrice / 100}
            </p>
          )}

          {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
            <div className="flex gap-x-1 md:gap-x-2">
              <img src={Star} className="w-2 md:w-4" />
              <p>
                <span className="font-bold text-xs  md:text-base">
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}(
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </p>
            </div>
          ) : (
            ""
          )}

          <p className="text-xs md:text-sm hidden md:block">
            {item?.card?.info?.description}
          </p>

          <p className="text-xs md:text-sm block md:hidden">
            {item?.card?.info?.description && item?.card?.info?.description.substring(0,40) + "..."}
          </p>
          
        </div>

        <div className="w-20 md:w-40  flex flex-col gap-y-0.5 md:gap-y-1">
          {item?.card?.info?.imageId ? (
            <img
              className="w-14 h-14 md:w-36 md:h-36  mx-auto rounded-xl object-cover shadow-sm"
              src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId}
            ></img>
          ) : (
            ""
          )}

          <div className="w-8 md:w-16 flex mx-auto justify-between">
            <img
              src={Minus}
              className={`w-2 md:w-4 ${
                item.quantity == 1 ? "opacity-50" : " "
              }`}
              onClick={() => {
                if (item.quantity > 1) handleMinusQuantity(item);
              }}
            />
            <p className="font-bold text-sm md:text-base">{item.quantity}</p>
            <img
              src={Plus}
              className="w-2 md:w-4"
              onClick={() => {
                handlePlusQuantity(item);
              }}
            />
          </div>

          <button
            className="px-1 py-1 bg-red-400 w-16 md:w-28 text-xs md:text-base mx-auto rounded-lg"
            onClick={() => {
              removeItemFromCart(item);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="w-10/12 max-w-[720px]~ h-1 bg-gray-400 my-2"></div>
    </>
  );
};

export default CartItem;
