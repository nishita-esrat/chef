import { createBrowserRouter } from "react-router-dom";
import App from "../App";


  const routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:'home'
        }
      ]
    },
  ]);

export default routers;
