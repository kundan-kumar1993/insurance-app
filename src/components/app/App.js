import React, { Component } from 'react';
import '../app/App.css';
import Application from "../account/application";
import UserProvider from "../../providers/UserProvider";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Application />
      </UserProvider>
    )
  }
}

export default App;
