import React from 'react';
//import ReactDOM from "react-dom"
//import logo from './logo.svg';
import './App.css';

const Contextnumber = new React.createContext();

function App() {
  return (
    <Contextnumber.Provider value={5}>
    <div className="App">
        
            <Contextnumber.consumer>
                {(value)=><div>{value}</div>}
            </Contextnumber.consumer>
         
    </div>
    </Contextnumber.Provider>
  );
}

export default App;
