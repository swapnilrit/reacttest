import './App.css';

import Parent from './components/Parent';
import styles from "./css/style.module.scss";

function App() {
  return (
    <div className="App">
     
     <Parent hell={styles}></Parent>
    </div>
  );
}

export default App;
