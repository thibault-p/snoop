import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import RoomsList from './RoomsList.jsx'
import AppBar from './AppBar.jsx'


export default class App extends Component {

  render() {
    return  (
      <div>
        <AppBar />
        <div className="container">
          {this.props.content}
        </div>
      </div>
    );
  }
}
