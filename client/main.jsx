import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// UI
import App from '../imports/ui/App.jsx';

// Models



Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
