import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center px-16 bg-orange-200" >
            <div className="w-25 h-20">
                <img className="w-25 h-20" src={Logo}>

                </img>
            </div>

            <div >
                <ul className="flex justify-between items-center gap-x-20">
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/contactus">Contact Us</Link>
                </ul>
            </div>

            <div>
                <ul className="flex justify-between items-center gap-x-20">
                    <Link to="/cart">Cart</Link>
                    <Link to="">Login</Link>
                </ul>
            </div>

        </div>
    )
}

export default Header;