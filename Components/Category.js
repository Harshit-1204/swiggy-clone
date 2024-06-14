import { CATEGORY_CDN_URL } from "../constants";
import LeftArrow from "../Assets/arrow-left-solid.svg"
import RightArrow from "../Assets/arrow-Right-solid.svg"

const Category = (props) => {
  const allCategory = props?.items?.imageGridCards?.info;
  

  const scrollLeft = () =>{
    document.getElementById('carousel').scrollBy({
        left: -250,
        behavior: 'smooth'
    });
  }

  const scrollRight = () =>{
    document.getElementById('carousel').scrollBy({
        left: 250,
        behavior: 'smooth'
    });
  }
  
  return (
    <div>
      {console.log(props)}

      <h1>{props.items.header.title}</h1>
      {/* <!-- Left Button --> */}
        <img src={LeftArrow}  class="rounded-full w-10 border-4 border-black" onClick={scrollLeft}></img>
      {/* <!-- Right Button --> */}
        <img src={RightArrow}  class="rounded-full w-10 border-4 border-black" onClick={scrollRight}></img>

      <div id="carousel" className="flex w-full max-w-6xl overflow-x-scroll no-scrollbar">
        {allCategory.map((item) => {
          return (
            <div >
              <img
              className="min-w-[200px]"
                src={
                  CATEGORY_CDN_URL+item?.imageId
                }
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
