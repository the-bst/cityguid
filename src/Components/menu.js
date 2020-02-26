import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../Design/menu.css';
import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Button, Icon } from 'antd';

//const { Button, Icon } = antd;

const ButtonGroup = Button.Group;

export default class Sider extends React.Component {
    render() {
        return (
            /*
          <DropdownButton id="dropdown-basic-button" title="Menu">
            <Dropdown.Item href="#" onClick={() => {this.props.showListeView()}}>Liste des monuments</Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => {this.props.showMapView()}}>Carte</Dropdown.Item>
          </DropdownButton> 
        )
        }*/


            <ButtonGroup>
                <Button type="primary" onClick={() => { this.props.showMapView() }}>
                    <Icon type="left" />
                    Map
      </Button>
                <Button type="primary" onClick={() => { this.props.showListeView() }}>
                    Liste Monuments
        <Icon type="right" />
                </Button>
            </ButtonGroup>
        )
    }
}
