const ShimmerRestaurantMenu = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="h-7 w-[20%] bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg my-3 md:my-6 mx-auto"></div>
      
      <div className="w-7/12 max-w-[1000px] h-[300px] md:h-[182px] flex flex-col md:flex-row md:gap-x-3 mx-auto justify-around my-4">
        <div className="w-[90%] h-[50%] md:w-[273px]  md:h-[182px] rounded-2xl shadow-md bg-gradient-to-r from-gray-400 to-gray-100 mx-auto"></div>

        <div className="w-[100%] md:w-[40%] flex flex-col  gap-y-4 mt-3 md:mt-1">
          <div className="w-[80%] h-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg mx-auto md:mx-1"></div>

          <div className="w-[20%] h-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1 mx-auto md:mx-1"></div>

          <div className="w-[30%] h-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1 mx-auto md:mx-1"></div>

          <div className="w-[40%] h-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1 mx-auto md:mx-1"></div>

          <div className="w-[70%] h-4 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg mx-auto md:mx-1"></div>
        </div>
      </div>

      <div className="w-full border"></div>

      <div className="flex flex-col gap-y-4 items-center mt-10">
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
        <div className="w-[60%] h-8 bg-gradient-to-r from-gray-400 to-gray-100 rounded-lg py-1"></div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantMenu;
