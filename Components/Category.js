import { CATEGORY_CDN_URL } from "../constants";
import LeftArrow from "../Assets/arrow-left-solid.svg";
import RightArrow from "../Assets/arrow-Right-solid.svg";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = (props) => {
  const carouselRef = useRef(null);
  const [isLeftEnd, setIsLeftEnd] = useState(true);
  const [isRightEnd, setIsRightEnd] = useState(false);
  const allCategory = props?.items?.imageGridCards?.info;

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
    <div className="border-b border-gray-300 pb-4 md:pb-12 ">
      <div className="flex justify-between">
        <div>
          {/* Title of carosel */}
          <p className="font-bold text-base md:text-2xl">{props.items.header.title}</p>
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
        {allCategory.map((item) => {
          const getCollectionId = (url) => {
            // Define the regular expression to match "collection_id=" followed by digits
            let regex = /collection_id=([^&]+(?:&[^&]*)*)/;

            // Use the regex to find a match in the URL
            let match = url.match(regex);

            // console.log(match[1]);
            return match[1];
          };
          const collectionId = getCollectionId(item.action.link);

          return (
            <Link key={item.id} to={"/fooditem/" + collectionId}>
              <img
                className="min-w-[100px] md:min-w-[144px]"
                src={CATEGORY_CDN_URL + item?.imageId}
              ></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
