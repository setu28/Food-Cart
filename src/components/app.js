import React, { useState } from "react";

import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";
import About from "./About";
import ErrorPage from "./Error";
import Contact from "./contact";
import Cart from "./Cart";
import RestrauntMenu from "./RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Profile from "./Profile";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
import Search from "./Search";
//import Instamart from "./Instamart";

const Instamart = lazy(()=>import("./Instamart"));



const AppLayout = () => {

  const [user, setUser] = useState({
    name: "Setu",
    email: "setu.shubham28@gmail.com",
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user: user,
      setUser: setUser,
    }}>
      <Header />
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/Search",
        element: <Search/>,
        
      },
      {
        path:"/about",
        element: <About/>,
        children:[
          {
            path: "profile",
            element: <Profile/>

          },

        ],
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/restaurants/:resid",
        element: <RestrauntMenu/>
      },
      {
        path:"/Instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      }
    ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
