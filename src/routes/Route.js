import Home from "../pages/Home";
import Login from "../pages/Login";

export const PulicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
      element: <Login />,
  }
];
export const PrivateRoutes = [
  // for private function
];

export default PulicRoutes;
