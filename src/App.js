import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import MainBody from './Components/MainBody/MainBody';
import styles from '../src/Styles/App.module.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.dsply}>
        <Sidebar />
        <MainBody />
      </div>

    </div>
  );
}

export default App;
