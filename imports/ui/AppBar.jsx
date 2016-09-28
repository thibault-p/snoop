import React, { Component } from 'react';


export default class AppBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Snoop</a>
          </div>
        </div>
      </nav>
    );
  }
}
