import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Design/menu.scss';
import { ReactComponent as Logo } from './bars-solid.svg';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Sider extends React.Component {

  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown ntm">
        <Dropdown.Item href="#" onClick={() => {this.props.showListeView()}}>Liste des monuments</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => {this.props.showMapView()}}>map</Dropdown.Item>
      </DropdownButton> 
    )
  }
}

//ReactDOM.render(<Sider />, document.getElementById('root'));