import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Rooms } from '../api/rooms.js';



export default class Room extends Component {

  constructor() {
    super();
  }

  render () {
    const room = this.props.room;
    if (typeof room === 'undefined')  {
      return (
        <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
          <h1>Not valid</h1>
        </div>
      );
    }

    return (
      <div
        className="col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1 room-detail">
        <div className="col-xs-12 entry header">
          <a href="/rooms">
          <span
            className="glyphicon glyphicon-arrow-left"
            aria-hidden="true"></span> Back
          </a>
          <div className="pull-right btn-toolbar">
            <button className="btn btn-default">
              <span
                className="glyphicon glyphicon-pencil"
                aria-hidden="true"></span>
            </button>
            <button className="btn btn-danger">
              <span
                className="glyphicon glyphicon-trash"
                aria-hidden="true"></span>
            </button>
          </div>
          <h1>{room.name}
          </h1>
          <small>
            {room.description || 'No description'}
          </small>
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  room: PropTypes.object,
};

export default createContainer(({id}) => {
  return {
    room: Rooms.findOne(id),
  };
}, Room);
