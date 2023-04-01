import './App.css';
import CounterOne from './Components/UseMemo/CounterOne';
import UseCallbackHooks from './Components/UseCallback/UseCallbackHooks';
import UseContextHook from './Components/UseContext/UseContextHook';
import UseReducerHookOne from './Components/UseReducer/ExampleOne/UseReducerHookOne';
import CakeContainer from './Components/Redux-Example/CakeContainer';
import IcecreamContainer from './Components/Redux-Example/IcecreamContainer';
import {Provider} from 'react-redux'
import store from './Redux/store';

function App() {
  return (

   <>
    <Provider store={store}>
    <div className="App">
      {/* <CounterOne/> */}
      {/* <UseCallbackHooks/> */}
      {/* <UseContextHook/> */}
      {/* <UseReducerHookOne/> */}
      <CakeContainer/>
      <IcecreamContainer/>
    </div>
    </Provider>
   </>
  );
}

export default App;
