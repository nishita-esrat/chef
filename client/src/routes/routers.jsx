import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Chef from "../pages/Chef/Chef";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { showFavItem } from "../loaders/loader";
import FavChef from "../pages/favChef/FavChef";
import Private from "../private_route/Private";
import Profile from "../component/shared/profile/Profile";
import ErrorPage from "../pages/error/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chef-server-murex.vercel.app/all_chef"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "my_item",
        element: (
          <Private>
            <FavChef />
          </Private>
        ),
        loader: showFavItem,
      },
      {
        path: "single_chef/:chefId",
        element: (
          <Private>
            <Chef />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-server-murex.vercel.app/all_chef/${params.chefId}`
          ),
      },
      {
        path: "login",
        element: <Login />,
      },
      ,
      {
        path: "register",
        element: <Register />,
      },
      ,
      {
        path: "profile",
        element: (
          <Private>
            <Profile />
          </Private>
        ),
      },
    ],
  },
]);

export default routers;
