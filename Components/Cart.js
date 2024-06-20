import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import FoodItemCard from "../Components/FoodItemCard";

const Cart = () =>{
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.cartItems);
    console.log(cartItems);

    const clearCartItem = ()=>{
        dispatch(clearCart());
    }

    return <div className="flex flex-col justify-center items-center">
    <h1>Welcome to your Cart</h1>

    <button className="w-32 h-10 bg-red-500" onClick={() => clearCartItem()}>Clear cart</button>
    {
        cartItems.map((item) =>{
            return <FoodItemCard item={item} key={item?.card?.info?.id} />
        })
    }


    </div>
}

export default Cart;