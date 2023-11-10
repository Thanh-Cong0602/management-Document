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
}

export default App;
