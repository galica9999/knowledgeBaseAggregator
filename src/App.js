import Nav from './components/Nav';
import PanelLeft from './pages/PanelLeft';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/app/articles">
      <div className="App">
        <Nav />
        <PanelLeft />
      </div>
    </BrowserRouter>
  );
}

export default App;
