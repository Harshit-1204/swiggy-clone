import { CLOUDINARY_CDN_URL } from "../constants";
import Veg from "../Assets/green.svg";
import Non_veg from "../Assets/red.svg";
import Star from "../Assets/star-solid.svg";
import Plus from "../Assets/plus-solid.svg";
import Minus from "../Assets/minus-solid.svg";
import { addQuantity, deleteItem, removeQuantity } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  console.log(item);

  function removeItemFromCart(item) {
    dispatch(deleteItem(item));
  }

  function handlePlusQuantity(item){
    dispatch(addQuantity(item));
  }

  function handleMinusQuantity(item){
    dispatch(removeQuantity(item));
  }

  return (
    <>
      <div className="w-8/12 max-w-[720px] my-2 flex justify-around">
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
            {item?.card?.info?.bestseller && <p>Bestseller</p>}
          </div>
          <p className="font-bold text-base">{item?.card?.info?.name}</p>

          {item.card.info.price ? (
            <p className="font-bold text-base">₹ {item.card.info.price / 100}</p>
          ) : (
            <p className="font-bold text-base">₹ {item.card.info.defaultPrice / 100}</p>
          )}

          {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
            <div className="flex gap-x-2">
              <img src={Star} className="w-4" />
              <p>
                <span className="font-bold text-base">{item?.card?.info?.ratings?.aggregatedRating?.rating} </span>
                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
              </p>
            </div>
          ) : (
            ""
          )}

          <p className="text-sm">{item?.card?.info?.description}</p>
        </div>

        <div className="w-40  flex flex-col gap-y-1">
          {item?.card?.info?.imageId ? (
            <img
              className="w-36 h-36  mx-auto rounded-xl object-cover shadow-sm"
              src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId}
            ></img>
          ) : (
            ""
          )}

          <div className="w-16 flex mx-auto justify-between">
            <img src={Minus} className={`w-4 ${item.quantity == 1 ? 'opacity-50' : ' '}`} onClick={() =>{if(item.quantity > 1) handleMinusQuantity(item)}}/>
            <p className="font-bold text-base">{item.quantity}</p>
            <img src={Plus} className="w-4" onClick={() =>{handlePlusQuantity(item)}}/>
          </div>

          <button
            className="px-1 py-1 bg-red-400 w-28 mx-auto rounded-lg"
            onClick={() => {
              removeItemFromCart(item);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="w-8/12 max-w-[720px]~ h-1 bg-gray-400 my-2"></div>
    </>
  );
};

export default CartItem;
