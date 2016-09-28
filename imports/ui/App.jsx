import React, { Component, PropTypes } from 'react';


import RoomsList from './RoomsList.jsx';
import AppBar from './AppBar.jsx';


export default class App extends Component {

  render() {
    return  (
      <div>
        <AppBar />
        <div className="container">
          <RoomsList />
        </div>
      </div>
    );
  }
}
