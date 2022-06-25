import './App.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragonDrop from './components/DragonDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <DragonDrop />
    </div>
    </DndProvider>
  );
}

export default App;
