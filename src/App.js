import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import { reducer } from './redux/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="row bg-light">
          <Main />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
