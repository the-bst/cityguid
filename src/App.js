import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Map from "./map";
//import { Marker } from 'leaflet';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position =[49.1191, 6.1727]
export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
      </div>
    )
  }
}
