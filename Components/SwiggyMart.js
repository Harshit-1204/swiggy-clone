import { Link } from "react-router-dom";
import Code from "../Assets/code-solid.svg";

const SwiggyMart = () => {
  return (
    <div className="h-screen flex flex-col mt-20 items-center gap-y-10">
      <img className="w-16 md:w-28" src={Code} />
      <div className="text-center">
        <p class="text-xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Under Construction
        </p>
        <p className="text-base md:text-lg text-gray-600">
          We're currently working on this page. Please check back later.
        </p>
      </div>
      <div className="mt-8">
        <Link href="/" className="border mx-2 text-sm md:text-base rounded-lg py-1 px-4 bg-orange-300 ">
          Till Then Order Food From Fast Delivery
        </Link>
      </div>
    </div>
  );
};

export default SwiggyMart;
