import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_INFO_URL, CLOUDINARY_CDN_URL } from "../constants";
import Star from "../Assets/star-solid.svg";
import Bike from "../Assets/person-biking-solid.svg";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurntMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantInfo(id);
  }, []);

  async function fetchRestaurantInfo(id) {
    const data = await fetch(RESTAURANT_INFO_URL + id);
    const json = await data.json();

    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return (
    <>
      {restaurantInfo.length === 0 ? (
        <p>Shimmer Ui loading...</p>
      ) : (
        <div>
          {console.log(restaurantInfo)}
          {console.log(restaurntMenu)}
          <p>{restaurantInfo.name}</p>
          <div className="flex  gap-x-7">
            <div className="w-[300px] h-[200px]">
              <img
                src={CLOUDINARY_CDN_URL + restaurantInfo.cloudinaryImageId}
                className="w-[300px] h-[200px]"
              ></img>
            </div>

            <div>
              <div className="flex gap-x-2">
                <img src={Star} className="w-5" />
                <p>{restaurantInfo.avgRating}</p>
                <p>({restaurantInfo.totalRatingsString}) · </p>
                <p>{restaurantInfo.costForTwoMessage}</p>
              </div>

              <p>{restaurantInfo.cuisines.join(", ")}</p>

              <p>{restaurantInfo.locality}</p>

              <p>{restaurantInfo.sla.slaString}</p>

              <div className="flex">
                <img src={Bike} className="w-5"></img>
                {restaurantInfo.sla.lastMileTravelString}
                <p>|</p>
                <p>
                  {" "}
                  ₹{restaurantInfo.feeDetails.totalFee / 100} Delivery fee will
                  apply
                </p>
              </div>
            </div>
          </div>


          <div>
            {
                restaurntMenu.map((item,index)=>{
                    if(index > 1) return (<p>{item.card.card.title}</p>);
                })
            }
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
