import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="row bg-dark">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
