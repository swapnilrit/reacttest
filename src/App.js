import logo from './logo.svg';
import './App.css';
import Counter  from './components/Counter';
import {store} from "./store";
import { Provider } from 'react-redux';
import ListUsers from './components/ListUsers';
import Child from './components/Child';
import Parent from './components/Parent';
import styles from "./css/style.module.scss";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
     <Counter></Counter>
     <ListUsers></ListUsers>
     </Provider> */}
     <Parent hell={styles}></Parent>
    </div>
  );
}

export default App;
