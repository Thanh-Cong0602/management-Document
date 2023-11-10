import { DefaultLayout } from "./components/layout";
import Store from "./components/Context/Store";
import Register from "./Component/RegisterPage/Register";
// import Login from "./Component/Login";
import Header from "./components/layout/default/Header";
import Footer from "./components/layout/default/Footer";
import { Route, Routes } from "react-router-dom";
import Router from "./Router";
import { Context } from "./Context";
function App() {
  return (
    <div className="App">
      <Context>
        <Router />
      </Context>
    </div>
  );
}

export default App;
