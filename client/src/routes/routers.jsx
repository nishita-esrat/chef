import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Chef from "../pages/Chef/Chef";
import { showFavItem } from "../loaders/loader";
import FavChef from "../pages/favChef/FavChef";


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader:()=> fetch("http://localhost:800/all_chef")
        },
        {
          path:'blog',
          element:<Blog/>
        },
        {
          path:'my_item',
          element:<FavChef/>,
          loader:showFavItem
        }
        ,
        {
          path:'single_chef/:chefId',
          element:<Chef/>,
          loader:({params})=>fetch(`http://localhost:800/all_chef/${params.chefId}`)
        }
      ]
    },
  ]);

export default routers;
