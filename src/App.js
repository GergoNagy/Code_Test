import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'
import UserList from './UserList'

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
        <UserList
          userList={this.state.users}
          onUserSelect={selectedUser => this.setState({selectedUser})}
        />
        
      </div>
    );
  }
}

export default App;
