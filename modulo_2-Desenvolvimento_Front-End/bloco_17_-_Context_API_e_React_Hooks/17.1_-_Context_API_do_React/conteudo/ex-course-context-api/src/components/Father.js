import React, { Component } from 'react';
import Daughter from './Daughter';

export default class Father extends Component {
  
  render() {    
    return (
      <div>
          <h3>Eu sou o pai</h3>
          <Daughter />
      </div>
    );
  }
}
