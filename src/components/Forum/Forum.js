import React, { Component } from 'react'
import './Forum.css'
import ThreadDisplay from '../ThreadDisplay/ThreadDisplay';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZtDlBv62ki13ekSdzh84Slt6WPrW3OrQ",
  authDomain: "we-re-not-really-al.firebaseapp.com",
  databaseURL: "https://we-re-not-really-al-default-rtdb.firebaseio.com",
  projectId: "we-re-not-really-al",
  storageBucket: "we-re-not-really-al.appspot.com",
  messagingSenderId: "781736681059",
  appId: "1:781736681059:web:e86c49e8ce83e6cfbe2256",
  measurementId: "G-8M8M6Z176M"
};

firebase.initializeApp(firebaseConfig);

class Forum extends Component {
  constructor(props) {
    super(props);
    this.database = firebase.database();
  }

    state = { clicked: false }

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
    }


    render() {
      return(
        <nav className="ForumItems">
          <div>
          <ThreadDisplay database={this.database} />
        </div>
      </nav>
    );
  }
}

export default Forum;