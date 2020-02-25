import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../Design/menu.css';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Sider extends React.Component {

  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Menu">
        <Dropdown.Item href="#" onClick={() => {this.props.showListeView()}}>Liste des monuments</Dropdown.Item>
        <Dropdown.Item href="#" onClick={() => {this.props.showMapView()}}>Carte</Dropdown.Item>
      </DropdownButton> 
    )
  }
}

//ReactDOM.render(<Sider />, document.getElementById('root'));