import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Logo from "../Assets/logo.png";
import { useSelector } from "react-redux";
import CartImage from "../Assets/cart-shopping-solid.svg";
import { useState } from "react";
import Bars from "../Assets/bars-solid.svg";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const status = useSelector((store) => store.user.isOnline);

  const [isLoggedIn, setIsLoogedIn] = useState(false);

  useIsOnline();

  return (
    <div className="flex justify-between items-center px-2 md:px-20 bg-gradient-to-r from-orange-400 to-orange-100 shadow-lg md:h-20">
      <div className="w-[20%] h-20 flex justify-center items-center">
        <Link to="/"><img className="md:w-25 md:h-20" src={Logo}></img></Link>
      </div>

      <div className="w-[75%]">
        <ul className="w-[100%] flex justify-end gap-x-4 md:justify-around items-center">
          <Link to="/" className="hover:font-semibold box-border hidden lg:block">Home</Link>
          <Link to="/aboutme" className="hover:font-semibold box-border hidden lg:block">Swiggy Mart</Link>
          <Link to="/cart" className="flex justify-start hover:font-semibold box-border">Cart<img src={CartImage} className="w-4 mx-2 hover:font-semibold box-border"/> - {cartItems.length}<span className="hidden md:block px-1">Items</span></Link>
          {status ? <p className="hover:font-semibold box-border">🟢 Online </p> : <p className="hover:font-semibold box-border"> 🔴 Offline</p>}
          {isLoggedIn ? <Link to="" className="hover:font-semibold box-border hidden lg:block" onClick={()=>{setIsLoogedIn(false)}}>Logout</Link> : 
          <Link to="" className="hover:font-semibold box-border hidden lg:block" onClick={()=>{setIsLoogedIn(true)}}>Login</Link>}
          <div className="block lg:hidden w-6 rounded-full my-auto"><img src={Bars}/></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
