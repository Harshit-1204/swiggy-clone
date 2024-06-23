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
    <div className="flex justify-between items-center px-16 bg-orange-200 font-poppins">
      <div className="w-25 h-20">
        <img className="w-25 h-20" src={Logo}></img>
      </div>

      <div>
        <ul className="flex justify-between items-center gap-x-20">
          <Link to="/">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contactus">Contact Us</Link>
        </ul>
      </div>

      <div>
        <ul className="flex justify-between items-center gap-x-20">
          
          <Link to="/cart" className="flex justify-center">Cart <img src={CartImage} className="w-4 mx-2"/> - {cartItems.length} items</Link>
          {status ? <p>🟢 Online </p> : <p> 🔴 Offline</p>}
          <Link to="">Login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
