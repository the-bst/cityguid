import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../Design/menu.scss';
import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Button, Icon } from 'antd';

import { FaMap, FaMonument } from "react-icons/fa";
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
                <Button id="map" type="primary" onClick={() => { this.props.showMapView() }}>
                    <FaMap size="2.2em" />
                    Afficher la Carte
                </Button>
                <Button id="listmon" type="primary" onClick={() => { this.props.showListeView() }}>
                    Liste Monuments
                   <FaMonument size="2.2em" />
                </Button>
            </ButtonGroup>
        )
    }
}
