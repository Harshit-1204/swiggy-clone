import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Logo from "../Assets/logo.png";
import Xmark from "../Assets/xmark-solid.svg";
import { useSelector } from "react-redux";
import CartImage from "../Assets/cart-shopping-solid.svg";
import { useState } from "react";
import Bars from "../Assets/bars-solid.svg";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const status = useSelector((store) => store.user.isOnline);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isToggle, setIsToggle] = useState(false);

  useIsOnline();


  return (
    <div className="relative flex justify-between items-center px-2 md:px-20 bg-gradient-to-r from-orange-400 to-orange-100 shadow-lg md:h-20">
      <div className="w-[20%] h-20 flex justify-center items-center">
        <Link to="/">
          <img className="md:w-25 md:h-20" src={Logo}></img>
        </Link>
      </div>

      <div className="w-[75%]">
        <ul className="w-[100%] flex justify-end gap-x-4 md:justify-around items-center">
          <Link
            to="/"
            className="hover:font-semibold box-border hidden lg:block"
          >
            Home
          </Link>
          <Link
            to="/swiggymart"
            className="hover:font-semibold box-border hidden lg:block"
          >
            Swiggy Mart
          </Link>
          <Link
            to="/cart"
            className="flex justify-start hover:font-semibold box-border"
          >
            Cart
            <img
              src={CartImage}
              className="w-4 mx-2 hover:font-semibold box-border"
            />{" "}
            - {cartItems.length}
            <span className="hidden md:block px-1">Items</span>
          </Link>
          {status ? (
            <p className="hover:font-semibold box-border">🟢 Online </p>
          ) : (
            <p className="hover:font-semibold box-border"> 🔴 Offline</p>
          )}
          {isLoggedIn ? (
            <Link
              to=""
              className="hover:font-semibold box-border hidden lg:block"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              to=""
              className="hover:font-semibold box-border hidden lg:block"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </Link>
          )}
          <div className="block lg:hidden w-6 rounded-full my-auto cursor-pointer">
            <img
              src={Bars}
              onClick={() => {
                setIsToggle(true);
              }}
            />
          </div>
        </ul>
      </div>

      <div className={`${isToggle ? 'flex' : 'hidden'} flex-col gap-y-4 bg-gradient-to-r from-orange-200 to-orange-100 absolute top-[100%] right-[0%] w-[35%] rounded-md lg:hidden z-10 py-4 px-4`}>
       <Link to="/" className="" onClick={() => {setIsToggle(!isToggle)}}>Home</Link>
       <Link to="/swiggymart">Swiggy Mart</Link>
       <span>{isLoggedIn ? <Link to="/" onClick={()=>{setIsLoggedIn(false)}}>Login</Link>: <Link to="/" onClick={()=>{setIsLoggedIn(true)}}>Logoff</Link>}</span>
       <img src={Xmark} className="w-6 absolute top-[9%] right-2 cursor-pointer" onClick={() =>{setIsToggle(!isToggle)}}/>
      </div>
      
    </div>
  );
};

export default Header;
