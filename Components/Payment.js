import { useSelector } from "react-redux";
import Veg from "../Assets/green.svg";
import Non_veg from "../Assets/red.svg";
import { Link } from "react-router-dom";

const Payment = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  console.log(typeof(cartItems[2]?.card?.info?.price)) ;


  function calculateTotal(){
    var total = 0;

    for(let i = 0; i < cartItems.length; i++){
        if(cartItems[i]?.card?.info?.price){
            total = Number(total) + Number(cartItems[i].quantity) * Number(cartItems[i].card.info.price/100);
        }else{
            total = Number(total) + Number(cartItems[i].quantity) * Number(cartItems[i].card.info.defaultPrice/100);
        }
    }
    return total;
  }



  return (
    <div className="flex flex-col justify-center items-center w-10/12 max-w-[1080px] mx-auto my-10">
      <p className="font-bold text-xl my-4">Hungry? Let's seal the deal!</p>

      <p className="font-bold text-lg my-4">Cart Items</p>

      {cartItems.map((item) => {
        return (
          <>
            <div className="w-[50%] flex justify-between gap-x-5 py-2">
              <div className="flex gap-x-2">
                <img
                  src={
                    item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                      ? Veg
                      : Non_veg
                  }
                  className="w-4"
                />
                <p className="font-bold text-base">{item?.card?.info?.name}</p>
              </div>
              <div className="font-bold text-base flex">
                {item.quantity} X{" "}
                {item.card.info.price ? (
                  <p>
                    {item.card.info.price / 100} {" ₹"}
                  </p>
                ) : (
                  <p>
                    {item.card.info.defaultPrice / 100} {" ₹"}
                  </p>
                )}
              </div>
            </div>
            <div className="w-[50%] bg-slate-400 h-0.5"></div>
          </>
        );
      })}

      <div className="flex my-4 font-bold text-base gap-x-2">
        <p >Total -</p>
        <p>{calculateTotal()} {" ₹"}</p>
        
      </div>

      <Link to="/payment-successful">
        <button className="mt-8 font-bold bg-green-500 py-2 px-3 rounded-lg">
          Payment
        </button>
      </Link>
    </div>
  );
};

export default Payment;
