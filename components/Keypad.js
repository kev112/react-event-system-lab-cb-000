import React from 'react';

export default class Keypad  extends React.Component {
  constructor() {
    super();

    this.eventCallback = this.eventCallback.bind(this);
  }

  eventCallback() {
    console.log('Entering password...');
  }
  // y
  render() {
    return (
      <input type="password" onKeyUp={this.eventCallback} />
    );
  }
}