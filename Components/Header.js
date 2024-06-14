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
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <ul className="flex justify-between items-center gap-x-20">
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;