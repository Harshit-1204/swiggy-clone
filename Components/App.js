import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";

import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import AboutMe from "./AboutMe";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
      }
    ],
  },
]);

export default App;
