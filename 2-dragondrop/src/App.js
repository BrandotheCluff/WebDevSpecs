import React from 'react';
import './App.css';

import DragonDrop from './components/DragonDrop';

const data = [
  {title: 'group 1', items: ['1', '2', '3']},
  {title: 'group 2', items: ['4', '5']}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DragonDrop data={data}/>  
      </header>
    </div>
  );
}

export default App;
