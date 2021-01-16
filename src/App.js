import React from 'react';
import './App.css';
import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey:       "AIzaSyCmc7QC6RYFXHvI-rKaCeFuczH8IGkfntU",
  authDomain: "werenotreallyalone.firebaseapp.com",
  databaseURL: "https://werenotreallyalone-default-rtdb.firebaseio.com",
  projectId: "werenotreallyalone",
  storageBucket: "werenotreallyalone.appspot.com",
  messagingSenderId: "443048600165",
  appId: "1:443048600165:web:34012c4b24604cfd3ddc8c",
  measurementId: "G-MYMPB8N49G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code>!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
