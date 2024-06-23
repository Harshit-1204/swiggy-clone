import { Link } from "react-router-dom";
import CartImage from "../Assets/cart-shopping-solid.svg";

const EmptyCart = () =>{
    return <div>
        <p>Welcome to your cart</p>

        <img src={CartImage} className="w-16"/>

        <p>Your Cart is Empty</p>

        <p>Add something to make  yourself happy :)</p>

        <Link to="/" >continue shopping</Link>
    </div>
}

export default EmptyCart;