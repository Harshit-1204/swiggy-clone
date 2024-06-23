import { useEffect, useState } from "react";
import Category from "./Category";
import RestaurantChainInCity from "./RestaurantChainInCity";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  useEffect(() => {
    fetchAllRestaurantDetail();
  }, []);

  async function fetchAllRestaurantDetail() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560"
    );
    const json = await data.json();

    setAllRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[0]?.card?.card
    // );
    setCategoryOfFood(json?.data?.cards[0]?.card?.card);
    setRestaurantChainInCity(json?.data?.cards[1]?.card?.card);

    return;
  }

  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [categoryOfFood, setCategoryOfFood] = useState([]);
  const [restaurantChainInCity, setRestaurantChainInCity] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const handleSearch = (text) =>{
    const data = allRestaurant.filter((restaurant)=>{
      console.log(restaurant.info.name.toLowerCase());
      return (restaurant.info.name.toLowerCase().includes(text.toLowerCase())); 
    }) 
    console.log(data);
    setFilteredRestaurant(data);
  }

  return (
    <div className="w-10/12 max-w-[1080px] mx-auto">
      

      {/* {What is in your mind} */}
      {categoryOfFood.length === 0 ? "" : <Category items={categoryOfFood} />}

      {/* {Top Restaurant in Mumbai } */}
      {restaurantChainInCity.length === 0 ? (
        ""
      ) : (
        <RestaurantChainInCity items={restaurantChainInCity} />
      )}

      {/* {All Filtered Restaurant} */}

      <p>Restaurants with online food delivery in Mumbai</p>
      <input
        type="text"
        className="border"
        placeholder="Search restaurant.."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <button className="border mx-2 px-2" onClick={handleSearch}>Search</button>

      <div className="flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <h1>No Restaurant found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              <RestaurantCard item={restaurant} key={restaurant.info.id} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
