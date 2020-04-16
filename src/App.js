import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookNextName from './Components/HookNextName';
import ObjectUseState from './Components/ObjectUseState';

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <HookCounterTwo/>
      <HookNextName/>
      <ObjectUseState/>
    </div>
  );
}

export default App;
