import './App.css';
import { Maincontainer } from './components/Maincontainer/Maincontainer';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Maincontainer />
    </div>
  );
}

export default App;
