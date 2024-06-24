import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_ITEM_CDN_URL } from "../constants";
import RestaurantCard from "../Components/RestaurantCard";

const FoodItem = () => {
  const { id } = useParams();

  const [restaurants, serRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    const data = await fetch(CATEGORY_ITEM_CDN_URL + id);
    const json = await data.json();
    serRestaurants(json?.data?.cards);
    console.log(json?.data?.cards);
  }

  return (
    <>
      <p>{restaurants[0]?.card?.card?.title}</p>
      <p>{restaurants[0]?.card?.card?.description}</p>

      <p>Restaurants to explore</p>

      <div className="flex flex-wrap">
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
    </>
  );
};

export default FoodItem;
