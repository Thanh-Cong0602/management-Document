<<<<<<< HEAD
import { DefaultLayout } from './components/layout';
import Store from './components/Context/Store';

function App() {
    return (
        <div className="App">
            <Store>
                <DefaultLayout />
            </Store>
        </div>
    );
=======
import logo from "./logo.svg";
import "./App.css";
import Register from "./Component/RegisterPage/Register";

function App() {
  return <Register />;
>>>>>>> 0a98499664d5a5f09df26a0c943f183128f014fe
}

export default App;
