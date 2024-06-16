import { CATEGORY_CDN_URL } from "../constants";
import LeftArrow from "../Assets/arrow-left-solid.svg";
import RightArrow from "../Assets/arrow-Right-solid.svg";
import { useRef,useEffect,useState } from "react";


const Category = (props) => {
  const carouselRef = useRef(null);
  const [isLeftEnd, setIsLeftEnd] = useState(true);
  const [isRightEnd, setIsRightEnd] = useState(false);
  const allCategory = props?.items?.imageGridCards?.info;

  const scrollLeft = () => {
    if (!isLeftEnd) {
      carouselRef.current.scrollBy({
        left: -450,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (!isRightEnd) {
      carouselRef.current.scrollBy({
        left: 450,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current; // Access the DOM element

    const handleScroll = () => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      
      if(carousel.scrollLeft === 0){
        setIsLeftEnd(true);
        setIsRightEnd(false);
      }else if(carousel.scrollLeft >= maxScrollLeft){
        setIsLeftEnd(false);
        setIsRightEnd(true);
      }else{
        setIsLeftEnd(false);
        setIsRightEnd(false);
      }

    };

    carousel.addEventListener('scroll', handleScroll);

    // Initialize button opacity on page load
    handleScroll();

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <div>
      {/* {console.log(props)} */}
      {/* Title of carosel */}
      <h1>{props.items.header.title}</h1>
      {/* Left Button */}
      <img
        src={LeftArrow}
        className={`rounded-full w-10 border-4 border-black ${isLeftEnd ? 'opacity-50' : 'opacity-100 cursor-pointer'}`}
        onClick={scrollLeft}
        alt="Scroll Left"
      />
      {/* Right Button */}
      <img
        src={RightArrow}
        className={`rounded-full w-10 border-4 border-black ${isRightEnd ? 'opacity-50' : 'opacity-100 cursor-pointer'}`}
        onClick={scrollRight}
        alt="Scroll Right"
      />
      <div
        id="carousel"
        ref={carouselRef}
        className="flex w-full max-w-6xl overflow-x-scroll no-scrollbar"
      >
        {allCategory.map((item) => {
          return (
            <div key={item.id}>
              <img
                className="min-w-[200px]"
                src={CATEGORY_CDN_URL + item?.imageId}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;