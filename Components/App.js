import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";
import FoodItem from "./FoodItem";
import appStore from "../utils/appStore";
import SwiggyMart from "./SwiggyMart";
import Payment from "./Payment";
import PaymentSuccessfull from "./PaymentSuccessfull";
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import AboutMe from "./AboutMe";
import FoodItem from "./FoodItem";
import ErrorElement from "./ErrorElement";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/swiggymart",
        element: <SwiggyMart />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/fooditem/:id",
        element: <FoodItem />,
      },
      {
        path: "/checkout",
        element: <Payment />,
      },
      {
        path: "/payment-successful",
        element: <PaymentSuccessfull />,
      },
    ],
  },
]);

export default App;
