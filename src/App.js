import { Provider } from 'react-redux';
import store from   './redux/store'
import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
        <IcecreamContainer></IcecreamContainer>
        <HooksCakeContainer></HooksCakeContainer>
      </div>      
    </Provider>
  );
}

export default App;
