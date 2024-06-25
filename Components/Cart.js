import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  const clearCartItem = () => {
    dispatch(clearCart());
  };

  if(cartItems.length == 0) return <EmptyCart />

  return (
    <div className="flex flex-col justify-center items-center w-10/12 max-w-[1080px] mx-auto my-8">
      <h1 className="font-bold text-lg my-4"> Welcome to your Cart</h1>

      <button className="w-32 h-10 px-3 py-1 bg-red-400  mx-auto rounded-lg" onClick={() => clearCartItem()}>
        Clear cart
      </button>

      {cartItems.map((item) => {
        return <CartItem item={item} key={item?.card?.info?.id} />;
      })}
    </div>
  );
};

export default Cart;
