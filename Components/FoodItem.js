import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_ITEM_CDN_URL } from "../constants";
import RestaurantCard from "../Components/RestaurantCard";
import ShimmerFoodItem from "./ShimmerFoodItem";

const FoodItem = () => {
  const { id } = useParams();

  const [restaurants, serRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const data = await fetch(`/api/fooditem/${id}`);

    const json = await data.json();
    serRestaurants(json?.data?.cards);
    console.log(json?.data?.cards);
  }

  return (
    <>
    {restaurants.length == 0 ? <ShimmerFoodItem /> :
    
    <div className="w-10/12 max-w-[1080px] mx-auto my-8 h-full">
      <p className="font-bold text-3xl my-4">{restaurants[0]?.card?.card?.title}</p>
      <p className="font-semibold text-xl">{restaurants[0]?.card?.card?.description}</p>
      <div className="w-full h-[1px] bg-gray-400 my-4"></div>
      <p className="font text-lg">Restaurants to explore</p>

      <div className="flex flex-wrap justify-center md:justify-between gap-y-3">
        {restaurants.map((item) => {
          // console.log(item.card.card);
          if (item?.card?.card?.info)
            return (
              <RestaurantCard
                item={item.card.card}
                key={item?.card?.card?.info?.id}
              />
            );
        })}
      </div>
    </div>}
    </>
  );
};

export default FoodItem;
