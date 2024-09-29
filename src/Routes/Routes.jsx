import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signUp',
        element: <SignUp/>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute>
          <Checkout/>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings/></PrivateRoute>
      }
    ],
  },
]);

export default router;
