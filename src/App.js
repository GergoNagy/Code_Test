import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'

class App extends Component {
  constructor(){
    super()

    this.state = {
      accounts: [],
      users: [],
      selectedUser: null
    }
  }

  componentDidMount(){
    const rootRef = firebase.database().ref()
    rootRef.on('value', snap => {this.setState(snap.val())})
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
