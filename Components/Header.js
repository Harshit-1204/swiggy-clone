import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Logo from "../Assets/logo.png";
import { useSelector } from "react-redux";
import CartImage from "../Assets/cart-shopping-solid.svg";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const status = useSelector((store) => store.user.isOnline);

  useIsOnline();

  return (
    <div className="flex justify-between items-center px-20 bg-orange-300 shadow-lg">
      <div className="w-[20%] h-20">
        <img className="w-25 h-20" src={Logo}></img>
      </div>

      <div className="w-[75%]">
        <ul className="w-[100%] flex justify-around items-center">
          <Link to="/" className="w-36 hover:font-semibold box-border">Home</Link>
          <Link to="/aboutme" className="w-36 hover:font-semibold box-border">About Me</Link>
          <Link to="/contactus" className="w-36 hover:font-semibold box-border">Contact Us</Link>
          <Link to="/cart" className="w-36 flex justify-start hover:font-semibold box-border">Cart<img src={CartImage} className="w-4 mx-2 hover:font-semibold box-border"/> - {cartItems.length} items</Link>
          {status ? <p className="w-36 hover:font-semibold box-border">🟢 Online </p> : <p className="w-36 hover:font-semibold box-border"> 🔴 Offline</p>}
          <Link to="" className="w-36 hover:font-semibold box-border">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
