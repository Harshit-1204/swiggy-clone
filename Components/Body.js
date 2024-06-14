import { useEffect, useState } from "react";
import Category from "./Category"
const Body = () =>{
    useEffect(()=>{
        fetchAllRestaurantDetail();
    }, [])

    async function fetchAllRestaurantDetail(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560");
        const json = await data.json();
        setAllRestaurant(json);
        setCategoryOfFood(json?.data?.cards[0]?.card?.card);
        console.log(json?.data?.cards[0]?.card?.card);
        return;
    }

    const [searchText, setSearchText] = useState("");
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [categoryOfFood, setCategoryOfFood] = useState([]);

    return (
        <div>
            <input type="text" className="border" placeholder="Search restaurant.." value={searchText} onChange={(e)=> (setSearchText(e.target.value))}/>
            <button className="border mx-2 px-2">Search</button>

            {(categoryOfFood.length === 0) ? "" : <Category items={categoryOfFood}/>}

        </div>
    
    )
} 

export default Body;