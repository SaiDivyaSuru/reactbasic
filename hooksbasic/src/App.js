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
import ClickCounter2 from './Component/ClickCounter2';
import HoverCounter2 from './Component/HoverCounter2';
import User from './Component/User';
import Counter from './Component/Counter';


function App() {
  return (
    <div className="App">
      {/* <ClassClickCounter name='sai'/>
      <HoverCounter/> */}
      {/* <ClickCounter2/>
      <HoverCounter2/>
      <User render={(isLoggedIn) => isLoggedIn?'Vishwas':'Guest'}/> */}
      <Counter render = {(count,incrementCount) => 
        <ClickCounter2 count={count} incrementCount={incrementCount}/>} />
      <Counter render = {(count,incrementCount) => 
        <HoverCounter2 count={count} incrementCount={incrementCount}/>} />

    </div>
  );
}

export default App;
