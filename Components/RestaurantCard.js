import Star from "../Assets/star-solid.svg";
import { Link } from "react-router-dom";
import { CLOUDINARY_CDN_URL } from "../constants";

const RestaurantCard = ({ item }) => {
  const cloudinaryImageId = item?.info?.cloudinaryImageId;
  const cuisines = item?.info?.cuisines.join(", ");
  const restaurantName = item?.info?.name;


  return (
    <div className="min-w-[273px] max-w-[273px] min-h-[160px] md:min-h-[284px] mx-3 hover:scale-105 transition ease-in-out duration-300 my-3 md:my-4 rounded-2xl ">
      <Link to={"/restaurant/" + item.info.id}>
        <div className="relative">
          <img
            className="w-[273px]  max-h-[182px] rounded-2xl shadow-md object-cover -z-10"
            src={CLOUDINARY_CDN_URL + cloudinaryImageId}
          />
          <div className="absolute bottom-0 left-0 w-[273px]  max-h-[182px] rounded-b-2xl bg-gradient-to-t from-gray-700 to-transparent z-10">
            <p className="pl-3 pb-2 text-white text-xl font-bold">{item?.info?.aggregatedDiscountInfoV3?.header} {item?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
          </div>
        </div>

        <p className="text-lg font-semibold mt-2">{restaurantName.length <= 24 ? restaurantName :restaurantName.substring(0, 24) + "..." }</p>

        <div className="flex gap-x-1.5 font-bold text-base">
          <img src={Star} className="w-5" />
          <p className="">{item?.info?.avgRating} · </p>
          <p className=""> {item?.info?.sla?.slaString}</p>
        </div>

        <p className="text-base leading-tight">
          {cuisines.length <= 24 ? cuisines : cuisines.substring(0, 24) + "..."}
        </p>
        <p className="text-base leading-tight">{item?.info?.areaName}</p>
      </Link>
    </div>
  );
};

export default RestaurantCard;
