
import './App.css';
import { Tooltip } from 'react-tooltip'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Thanks for hovering! I'm a tooltip">
          Tooltip </a>
        <Tooltip id="my-tooltip" />
      </header>
    </div>
  );
}

export default App;
