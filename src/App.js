import './App.css';
import CounterOne from './Components/UseMemo/CounterOne';
import UseCallbackHooks from './Components/UseCallback/UseCallbackHooks';
import UseContextHook from './Components/UseContext/UseContextHook';
import UseReducerHookOne from './Components/UseReducer/ExampleOne/UseReducerHookOne';
import CakeContainer from './Components/Redux-Example/CakeContainer';
import IcecreamContainer from './Components/Redux-Example/IcecreamContainer';
import Input from './Components/Form/Input';
import Input2 from './Components/Form/Input2';
import CodeSplit from './Components/Code-Splitting/code-split';
import DropDownMenu from './Components/DropDown/dropdownmenu';
import UseCallbackHooks2 from './Components/UseCallBack2/UseCallBackHook';
import MyCounter from './Components/UseMemo2/MyCounter';
import UseEffectDemo from './Components/UseEffect/UseEffectDemo';
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
      {/* <CakeContainer/>
      <IcecreamContainer/> */}
      {/* <Input/> */}
      {/* <CodeSplit/> */}
      {/* <DropDownMenu/> */}
      {/* <Input2/> */}
      {/* <UseCallbackHooks2/> */}
      {/* <MyCounter/> */}
      <UseEffectDemo name="spidey2"/>
    </div>
    </Provider>
   </>
  );
}

export default App;
