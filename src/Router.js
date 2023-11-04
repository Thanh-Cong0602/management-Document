import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PersonalInformation from "./Component/Profile/Profile";
import Login from "./Component/Login/login";
import Register from "./Component/RegisterPage/Register";
import Home from "./pages/Home";
import HomePage from "./components/HomePage/HomePage";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <PersonalInformation />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
