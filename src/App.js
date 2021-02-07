import React from 'react'
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import BearStore from "./components/BearStore"
import Buttler from "./components/Buttler"
import Mafia from "./components/Mafia"

function App() {
  return (
    <Provider store={store}>
      <div className="App flex-container yellow-background">
        <Mafia></Mafia>
        <div class="arrow-right"></div>
        <Buttler></Buttler>
        <div class="arrow-right"></div>
        <BearStore></BearStore>
      </div>
    </Provider>
  );
}

export default App;
