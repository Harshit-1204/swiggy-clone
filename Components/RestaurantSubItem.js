import FoodItemCard from "./FoodItemCard";
import DownAerrow from "../Assets/down-long-solid.svg";
import UpAerrow from "../Assets/up-long-solid.svg";

const RestaurantSubItem = ({ index, isVisible, item, setIsVisible }) => {
  const foodItem_Array = item?.card?.card?.itemCards;
  // console.log(foodItem_Array);
  return (
    <>
      {item.card.card.title ? (
        <div className="my-4">
          <div className="flex gap-x-5 ">
            <p>{item.card.card.title}</p>

            {isVisible == index ? (
              <img
                src={UpAerrow}
                onClick={() => {
                  setIsVisible(-1);
                }}
                className="w-2"
              />
            ) : (
              <img
                src={DownAerrow}
                onClick={() => {
                  setIsVisible(index);
                }}
                className="w-2"
              />
            )}
          </div>
          <div>
            {isVisible == index && (
              <>
                {foodItem_Array.map((item) => {
                  // console.log(item);
                  return (
                    <FoodItemCard item={item} key={item?.card?.info?.id} />
                  );
                })}
              </>
            )}
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default RestaurantSubItem;
