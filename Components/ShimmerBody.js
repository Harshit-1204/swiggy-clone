import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Shimmerbody = () => {
  return (
    <>
      <div className="w-11/12 max-w-[1080px] mx-auto my-8">
        {/* {What is in your mind} - category*/}
        <div className="border-b border-gray-300 ">
          <div className="flex justify-between ">
            {/* Title of carosel */}
            <div className="w-44 md:w-64 h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>

            <div className="flex gap-x-5">
              {/* Left Button */}
              <div className="rounded-full w-6 md:w-10 h-6 md:h-10 bg-gradient-to-r from-gray-400 to-gray-100"></div>

              {/* Right Button */}
              <div className="rounded-full w-6 md:w-10 h-6 md:h-10 bg-gradient-to-r from-gray-400 to-gray-100"></div>
            </div>
          </div>

          <div className="flex w-full h-19 md:h-36 max-w-6xl no-scrollbar my-6 md:my-12 gap-x-10 md:gap-x-12">
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 "></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 "></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 "></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 "></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 hidden md:block"></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 hidden md:block"></div>
            <div className="w-16 md:w-28 h-16 md:h-28 rounded-full bg-gradient-to-r from-gray-400 to-gray-100 hidden md:block"></div>
          </div>
        </div>

        {/* {Top Restaurant in Mumbai } - resturantcahincity */}
        <div className="h-[350px] my-6 md:my-8">
          <div className="flex justify-between">
            {/* Title of carosel */}
            <div className="w-60 md:w-64 h-7 md:h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>

            <div className="flex gap-x-5">
              {/* Left Button */}
              <div className="rounded-full w-6 md:w-10 h-6 md:h-10 bg-gradient-to-r from-gray-400 to-gray-100"></div>

              {/* Right Button */}
              <div className="rounded-full w-6 md:w-10 h-6 md:h-10 bg-gradient-to-r from-gray-400 to-gray-100"></div>
            </div>
          </div>

          <div className="flex w-full h-28 md:h-36 max-w-6xl no-scrollbar my-8 md:my-12 gap-x-3 md:gap-x-12">
            <ShimmerRestaurantCard />
            <ShimmerRestaurantCard />
            <ShimmerRestaurantCard />
          </div>

          
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>

        {/* {All Filtered Restaurant} cards */}
        <div className="h-[350px] my-8">
          <div className="flex justify-between">
            {/* Title of carosel */}
            <div className="w-64 h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg"></div>

            
          </div>

          <div className="flex w-full h-36 my-12 gap-x-12">
            <ShimmerRestaurantCard />
            <ShimmerRestaurantCard />
            <ShimmerRestaurantCard />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
    </>
  );
};

export default Shimmerbody;
