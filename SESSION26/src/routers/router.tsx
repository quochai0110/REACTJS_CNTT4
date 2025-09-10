import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import ProductDetail from "../Components/ProductDetail";
import Student from "../pages/Student";
import StudentDetail from "../Components/StudentDetail";
import Home from "../pages/Home";
import PrivateRoute from "../Components/PrivateRoute";
import Account from "../Components/Account";
import Login from "../Components/Login";

export const routers = createBrowserRouter([
    {
      path:"/",
      element: <Home></Home>
    },
    {
      path:"/account",
      element: <PrivateRoute element={<Account></Account>}></PrivateRoute>,
      children:[
        {
          path:"abc",
          element:<PrivateRoute element={<></>}></PrivateRoute>
        }
      ]
    
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/products",
      element:<Products></Products>
    },
    {
      path:"/products/:productsID",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/student",
      element:<Student></Student>
    },
    {
      path:"/student/:studentName",
      element:<StudentDetail></StudentDetail>
    },
  ]);