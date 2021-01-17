import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Forum from "./components/Forum/Forum";
import './App.css';

//import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Forum />
    </div>
  );
}

export default App;
