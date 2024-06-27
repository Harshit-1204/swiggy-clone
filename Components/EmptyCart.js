import { Link } from "react-router-dom";
import CartImage from "../Assets/cart-shopping-solid.svg";

const EmptyCart = () =>{
    return <div className="flex flex-col justify-center items-center gap-y-8 h-screen">
        <p className="font-bold text-3xl">Welcome to your cart</p>

        <img src={CartImage} className="w-16 "/>

        <p className="font-semibold text-lg">Your Cart is Empty</p>

        <p className="font-semibold text-lg">Add something to make  yourself happy :)</p>

        <Link to="/" className="border mx-2 rounded-lg py-1 px-4 bg-orange-300">continue shopping</Link>
    </div>
}

export default EmptyCart;