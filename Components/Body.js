import { useEffect, useState } from "react";
import Category from "./Category";
import RestaurantChainInCity from "./RestaurantChainInCity";
import RestaurantCard from "./RestaurantCard";
import Shimmerbody from "./ShimmerBody";
import { ALL_RESTAURANT_URL } from "../constants";
import axios from "axios";

const Body = () => {
  useEffect(() => {
    fetchAllRestaurantDetail();
  }, []);

  async function fetchAllRestaurantDetail() {
    try {
      const data = await fetch(`/api/`);
      const json = await data.json();
      //console.log(data);

      setAllRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(
      //   json?.data?.cards[0]?.card?.card
      // );
      setCategoryOfFood(json?.data?.cards[0]?.card?.card);
      setRestaurantChainInCity(json?.data?.cards[1]?.card?.card);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    return;
  }

  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [categoryOfFood, setCategoryOfFood] = useState([]);
  const [restaurantChainInCity, setRestaurantChainInCity] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const handleSearch = (text) => {
    const data = allRestaurant.filter((restaurant) => {
      // console.log(restaurant.info.name.toLowerCase());
      return restaurant.info.name.toLowerCase().includes(text.toLowerCase());
    });
    console.log(data);
    setFilteredRestaurant(data);
  };

  return (
    <>
      {allRestaurant.length == 0 ? (
        <Shimmerbody />
      ) : (
        <div className="w-11/12 max-w-[1080px] mx-auto my-8">
          {/* {What is in your mind} */}
          {categoryOfFood.length === 0 ? (
            ""
          ) : (
            <Category items={categoryOfFood} />
          )}

          {/* {Top Restaurant in Mumbai } */}
          {restaurantChainInCity.length === 0 ? (
            ""
          ) : (
            <RestaurantChainInCity items={restaurantChainInCity} />
          )}

          {/* {All Filtered Restaurant} */}

          <p className="my-5 md:my-10 font-bold text-base md:text-2xl text-center md:text-left">
            Restaurants with online food delivery in Mumbai
          </p>

          <div className="flex justify-evenly items-center md:justify-start gap-x-6 pb-3">
            <input
              type="text"
              className="border border-orange-500 rounded-lg py-1 px-4 text-black-400"
              placeholder="Search restaurant..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <button
              className="border mx-2 rounded-lg py-1 px-4 bg-orange-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-around">
            {filteredRestaurant.length === 0 ? (
              <p className="font-semibold text-base md:text-2xl text-center">
                No Restaurant found
              </p>
            ) : (
              filteredRestaurant.map((restaurant) => {
                return (
                  <RestaurantCard item={restaurant} key={restaurant.info.id} />
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
