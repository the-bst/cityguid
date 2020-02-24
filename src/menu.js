import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './menu.css';
import { ReactComponent as Logo } from './bars-solid.svg';



export default class Sider extends React.Component {

  render() {
    return (
      <div>
        <button className="Logo"><Logo></Logo></button>
      </div>
    )
  }
}

ReactDOM.render(<Sider />, document.getElementById('root'));