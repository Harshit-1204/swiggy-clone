import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";
import FoodItem from "./FoodItem";
import appStore from "../utils/appStore";
import Payment from "./Payment";
import PaymentSuccessfull from './PaymentSuccessfull';
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import AboutMe from "./AboutMe";
import FoodItem from "./FoodItem";
import { Provider } from "react-redux";

const App = () => {
  
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },{
        path: "/aboutme",
        element: <AboutMe />
      },{
        path: "/contactus",
        element: <ContactUs />
      },{
        path: "/cart",
        element: <Cart />
      },{
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },{
        path: "/fooditem/:id",
        element: <FoodItem />
      },{
        path: "/checkout",
        element: <Payment />
      },{
        path: "/payment-successful",
        element: <PaymentSuccessfull />
      }
    ],
  },
]);

export default App;
