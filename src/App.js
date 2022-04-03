import { Provider } from 'react-redux';
import store from   './redux/store'
import CakeContainer from './components/CakeContainer';
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake={true}></ItemContainer>
        <ItemContainer></ItemContainer>
        <NewCakeContainer></NewCakeContainer>
        <CakeContainer></CakeContainer>
        <IcecreamContainer></IcecreamContainer>
        <HooksCakeContainer></HooksCakeContainer>

        <br />
        <br />
        <br />
        <UserContainer></UserContainer>

      </div>      
    </Provider>
  );
}

export default App;
