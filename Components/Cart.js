import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  const clearCartItem = () => {
    dispatch(clearCart());
  };

  if(cartItems.length == 0) return <EmptyCart />

  return (
    <div className="flex flex-col items-center w-10/12 max-w-[1080px] mx-auto my-8 min-h-screen ">
      <p className="font-bold text-lg my-4"> Welcome to your Cart</p>

      <button className="w-32 h-10 px-3 py-1 bg-red-400  mx-auto rounded-lg my-2" onClick={() => clearCartItem()}>
        Clear cart
      </button>

      {cartItems.map((item) => {
        return <CartItem item={item} key={item?.card?.info?.id} />;
      })}
      
      <Link to="/checkout"><button className="mt-8 font-bold bg-green-500 py-2 px-3 rounded-lg">Proceed To Payment</button></Link>
    </div>
  );
};

export default Cart;
