import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./Design/map.css";
import L from "leaflet";
import icon from "./BEBER.png";

var myIcon = L.icon({
  iconUrl: icon,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const center_map = [49.1191, 6.1727];

export default class MapView extends Component {

  constructor(props){
    super(props);
    const watcher = navigator.geolocation.watchPosition(this.displayLocationInfo);
    this.state = {
      position:[0,0],
    }
  }

start=()=>{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
  }
}

 displayLocationInfo = (position) =>{
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;
  var position=[];
  position.push(lat);
  position.push(lng);
  this.setState({position,});
  // console.log(`longitude: ${ lng } | latitude: ${ lat }`);
  // console.log(`Position :`,this.state.position);
}

setTimeout = (() => {
  navigator.geolocation.clearWatch(this.watcher);
}, 15000);



  render() {
    return (
      <Map center={center_map} zoom={13} className="Map">
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.start()}
        <Marker position={this.state.position} icon={myIcon} className="Marker">
          <Popup>
            <span>C EST BEBER</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
