import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import PersonalInformation from "./Component/Profile/Profile";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/profile",
      element: <PersonalInformation />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
