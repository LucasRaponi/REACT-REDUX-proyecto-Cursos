import React from 'react';
import './App.css';
import Cursos from "./Cursos";
import { Provider } from "react-redux";
import store from "./store";
import Menu from "./Menu";




function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
    <Menu title="YouCourse"/>
    <Cursos />



    </div>
    </Provider>
  );
}

export default App;
