import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Component/FunctionalComponent';

import Usestateobj from './Component/Usestateobj';
import ClassCounterOne from './Component/ClassCounterOne';
import HookCounterOne from './Component/HookCounterOne';
import ClassMouseEvent from './Component/ClassMouseEvent';
import HookMouse from './Component/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent/> */}
      {/* <Hookcounter/> */}
      {/* <Usestateobj/> */}
       {/* <ClassCounterOne/>  */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouseEvent/> */}
      <HookMouse/>
    </div>
  );
}

export default App;
