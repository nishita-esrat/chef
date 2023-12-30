import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'blog',
          element:<Blog/>
        },
        {
          path:'my_item',
          element:'heloooo'
        }
      ]
    },
  ]);

export default routers;
