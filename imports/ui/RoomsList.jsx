import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

// Models
import { Rooms } from '../api/rooms.js';

export default class RoomsList extends Component {
  constructor() {
    super();
    this.state = {
      newRoomCreation: false,
      formNameIsValid: true,
    };
  }

  handleViewRoom() {
    console.log(event);
    // FlowRouter.go()
  }

  handleAddRoom(event) {
    event.preventDefault();
    var active = this.state.newRoomCreation;
    if (active) {
      return;
    }
    this.setState({newRoomCreation: true});
  }

  handleSubmit(event) {
    event.preventDefault();
    const nodeName = ReactDOM.findDOMNode(this.refs.name);
    const nodeDesc = ReactDOM.findDOMNode(this.refs.description);
    const name = nodeName.value.trim();
    const desc = nodeDesc.value.trim();

    // validate form
    if (name.length === 0) {
      this.setState({formNameIsValid: false});
      return;
    }

    Rooms.insert({
      name: name,
      description: desc,
      createdAt: new Date(),
      sensors: 0,
    });
    nodeName.value = '';
    nodeDesc.value = '';
    this.resetForm();
  }


  renderRooms() {
    const rooms = this.props.rooms;
    if (rooms.length === 0) {
      return (
        <div className="col-xs-12 entry nothing text-center">
          <h1>No rooms to display. </h1>
          <small>
            <a onClick={this.handleAddRoom.bind(this)}>
              You should add one.
            </a>
          </small>
        </div>
      );
    } else {
      return this.props.rooms.map((room) => (
        <a href={"/rooms/" + room._id} key={room._id}
          className="col-xs-12 entry hoverable">
          <h3>{room.name}
          <span className="badge pull-right">{room.sensor || 0} sensor{(room.sensor || 0) > 1 ? 's' : ''}</span>
          </h3>
          <p className="description">{room.description || 'No description'}</p>

        </a>
      ));
    }
  }

  resetForm() {
    const nodeName = ReactDOM.findDOMNode(this.refs.name);
    const nodeDesc = ReactDOM.findDOMNode(this.refs.description);
    // reset fields
    nodeName.value = '';
    nodeDesc.value = '';
    this.setState({
      newRoomCreation: false,
      formNameIsValid: true,
    });
  }


  renderForm() {
    return (
      <div className={"col-xs-12 entry new-room " + (this.state.newRoomCreation ? 'show' : 'hide')} >
        <form className="new-room" onSubmit={this.handleSubmit.bind(this)}>
          <h2>New room</h2>
          <div className={"form-group " + (!this.state.formNameIsValid ? 'has-error': '') }>
            <input type="text"
              className="form-control"
              ref="name"
              placeholder="Room name" />
            <span className="help-block">
              The room name is <strong>required</strong>.
            </span>
          </div>
          <div className="form-group">
            <textarea type="text"
              className="form-control"
              ref="description"
              maxLength="140"
              placeholder="Room description">
            </textarea>
          </div>
          <div className="pull-right btn-toolbar">
            <button
              className="btn btn-default"
              onClick={this.resetForm.bind(this)}>
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary">
              Ok
            </button>
          </div>
        </form>
      </div>
    );
  }


  render() {
    return (
      <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 rooms-list">
        { this.renderRooms() }
        { this.renderForm() }
        <div className={"col-xs-12 entry control " + (!this.state.newRoomCreation ? 'show' : 'hide')}>
          <button
            className="btn btn-primary btn-lg pull-right"
            onClick={this.handleAddRoom.bind(this)}>
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}



RoomsList.propTypes = {
  rooms: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    rooms: Rooms.find({}).fetch(),
  };
}, RoomsList);
