import React from 'react';
import App from '../imports/ui/App';
import RoomsList from '../imports/ui/RoomsList';
import Room from '../imports/ui/Room';


FlowRouter.route('/', {
  name: 'index',
  action: function(params) {
    ReactLayout.render(App, {content: <RoomsList />});
  }
});

FlowRouter.route('/rooms', {
  name: 'rooms',
  action: function(params) {
    ReactLayout.render(App, {content: <RoomsList />});
  }
});

FlowRouter.route('/rooms/:roomId', {
  name: 'room',
  action: function(params) {
    ReactLayout.render(App, {content: <Room id={params.roomId}/>});
  }
});
