import { Provider } from 'react-redux';
import store from   './redux/store'
import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer></NewCakeContainer>
        <CakeContainer></CakeContainer>
        <IcecreamContainer></IcecreamContainer>
        <HooksCakeContainer></HooksCakeContainer>
      </div>      
    </Provider>
  );
}

export default App;
