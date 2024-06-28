import RestaurantCard from "./RestaurantCard";
import LeftArrow from "../Assets/arrow-left-solid.svg";
import RightArrow from "../Assets/arrow-Right-solid.svg";
import { useRef, useEffect, useState } from "react";

const RestaurantChainInCity = (props) => {
  const carouselRef = useRef(null);
  const [isLeftEnd, setIsLeftEnd] = useState(true);
  const [isRightEnd, setIsRightEnd] = useState(false);
  const allRestaurant = props?.items?.gridElements?.infoWithStyle?.restaurants;

  const scrollLeft = () => {
    if (!isLeftEnd) {
      carouselRef.current.scrollBy({
        left: -450,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (!isRightEnd) {
      carouselRef.current.scrollBy({
        left: 450,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current; // Access the DOM element

    const handleScroll = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft === 0) {
        setIsLeftEnd(true);
        setIsRightEnd(false);
      } else if (carousel.scrollLeft >= maxScrollLeft) {
        setIsLeftEnd(false);
        setIsRightEnd(true);
      } else {
        setIsLeftEnd(false);
        setIsRightEnd(false);
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    // Initialize button opacity on page load
    handleScroll();

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-6 md:py-12 border-b border-gray-300">
      <div className="flex justify-between pb-6">
        <div>
          {/* Title of carosel */}
          <h1 className="font-bold text-base md:text-2xl">{props.items.header.title}</h1>
        </div>

        <div className="flex gap-x-5">
          {/* Left Button */}
          <img
            src={LeftArrow}
            className={`rounded-full w-5 md:w-10 border-4 border-black ${
              isLeftEnd ? "opacity-50" : "opacity-100 cursor-pointer"
            }`}
            onClick={scrollLeft}
            alt="Scroll Left"
          />
          {/* Right Button */}
          <img
            src={RightArrow}
            className={`rounded-full w-5 md:w-10 border-4 border-black ${
              isRightEnd ? "opacity-50" : "opacity-100 cursor-pointer"
            }`}
            onClick={scrollRight}
            alt="Scroll Right"
          />
        </div>
      </div>

      <div
        id="carousel"
        ref={carouselRef}
        className="flex w-full max-w-6xl overflow-x-scroll no-scrollbar"
      >
        {allRestaurant.map((item) => {
          return <RestaurantCard item={item} key={item.info.id} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantChainInCity;
