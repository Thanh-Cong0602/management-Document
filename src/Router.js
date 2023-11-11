import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import App from "./App";
import PersonalInformation from "./Component/Profile/Profile";
import Login from "./Component/Login/login";
import Register from "./Component/RegisterPage/Register";
import Home from "./pages/Home";
import HomePage from "./components/HomePage/HomePage";
import DocumentList from "./Component/DocumentList/documentList";

const Router = () => {
  const router = createBrowserRouter([
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
    {
      path: "/documentList",
      element: <DocumentList />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
