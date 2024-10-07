import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';

import Usestateobj from './Component/Usestateobj';
import ClassCounterOne from './Component/ClassCounterOne';
import HookCounterOne from './Component/HookCounterOne';
import ClassMouseEvent from './Component/ClassMouseEvent';
import HookMouse from './Component/HookMouse';
import MouseContainer from './Component/MouseContainer';
import DataFetchin from './Component/DataFetchin';
import Reducer from './Component/Reducer';
import ComplexReducer from './Component/ComplexReducer';
import ClassClickCounter from './Component/ClassClickCounter';
import HoverCounter from './Component/HoverCounter';


function App() {
  return (
    <div className="App">
      <ClassClickCounter name='sai'/>
      <HoverCounter/>
    </div>
  );
}

export default App;
