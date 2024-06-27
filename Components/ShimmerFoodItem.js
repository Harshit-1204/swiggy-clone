import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const ShimmerFoodItem = () => {
    return <div className="w-10/12 max-w-[1080px] mx-auto my-8">
    <div className="h-8 w-[20%] my-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>
    <div className="h-7 w-[80%] my-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>
    <div className="w-full h-[1px] bg-gray-400 my-4"></div>
    <div className="h-7 w-[20%] my-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>

    <div className="flex flex-wrap justify-between gap-y-3">
      <ShimmerRestaurantCard />
      <ShimmerRestaurantCard />
      <ShimmerRestaurantCard />
      <ShimmerRestaurantCard />
      <ShimmerRestaurantCard />
      <ShimmerRestaurantCard />
    </div>
  </div>
}

export default ShimmerFoodItem;