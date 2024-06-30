import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_INFO_URL, CLOUDINARY_CDN_URL } from "../constants";
import Star from "../Assets/star-solid.svg";
import Bike from "../Assets/person-biking-solid.svg";
import RestaurantItem from "./RestaurantItem";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  // console.log(id);

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurntMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    fetchRestaurantInfo(id);
  }, []);

  async function fetchRestaurantInfo(id) {
    const data = await fetch(`/api/restaurant/${id}`);
    const json = await data.json();

    setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  return (
    <div className="w-11/12 max-w-[1080px] mx-auto my-8 min-h-screen">
      {restaurantInfo.length === 0 ? (
        <ShimmerRestaurantMenu />
      ) : (
        <div>
          {/* {console.log(restaurantInfo)}
          {console.log(restaurntMenu)} */}
          <div className="text-xl font-semibold my-6">
            <p className="text-center">{restaurantInfo.name}</p>
          </div>

          <div className="w-7/12 max-w-[1000px] flex flex-col md:flex-row md:gap-x-3 mx-auto justify-around my-4">
            <div className="mx-auto">
              <img
                src={CLOUDINARY_CDN_URL + restaurantInfo.cloudinaryImageId}
                className="w-[273px]  max-h-[182px] rounded-2xl shadow-md object-cover"
              ></img>
            </div>

            <div className="mt-3 md:mt-0">
              <div className="flex gap-x-1 lg:gap-x-1.5 font-bold text-sm lg:text-base justify-center md:justify-start">
                <img src={Star} className="w-3 lg:w-5" />
                <p>{restaurantInfo.avgRating}</p>
                <p>({restaurantInfo.totalRatingsString}) · </p>
                <p className="hidden lg:block">{restaurantInfo.costForTwoMessage}</p>
              </div>

              <p className="block lg:hidden text-center md:text-start">{restaurantInfo.costForTwoMessage}</p>
              
              <p className="text-base leading-tight py-1 text-center md:text-start">{restaurantInfo.cuisines.join(", ")}</p>

              <p className="text-base leading-tight py-1 text-center md:text-start">{restaurantInfo.locality}</p>

              <p className="text-base leading-tight py-1 text-center md:text-start">{restaurantInfo.sla.slaString}</p>

              <div className="flex text-base leading-tight py-1 gap-x-1 justify-center md:justify-start">

                <img src={Bike} className="w-5"></img>
                {restaurantInfo.sla.lastMileTravelString}
                <p>|</p>
                {restaurantInfo.feeDetails.totalFee ? (
                  <p>
                    ₹ {restaurantInfo.feeDetails.totalFee / 100} Delivery fee
                    will apply
                  </p>
                ) : (
                  <p>Free Delivery</p>
                )}
              </div>

              
            </div>
          </div>
          <div className="w-full border"></div>
          
          <RestaurantItem restaurntMenu={restaurntMenu} />
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
