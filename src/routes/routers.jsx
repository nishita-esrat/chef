import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);

export default routers;
