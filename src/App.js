import { Provider } from "react-redux"
import store from './redux/store.js'
import icon from './task2 icon.svg';
import TemperatureContainer from "./components/TemperatureContainer"
import SearchCity from "./components/SearchCity"
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={icon} className="back-icon" alt="icon" style={{ top: "5vh", left: "3vw" }} />
        <SearchCity />
        <TemperatureContainer />
        <img src={icon} className="back-icon" alt="icon" style={{ bottom: "5vh", right: "3vw" }} />
      </div>
    </Provider>
  );
}

export default App;