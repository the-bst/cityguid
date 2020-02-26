import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../Design/map.css";
import L from "leaflet";
import icon from "../Icons/location-arrow-solid.svg";
import axios from 'axios';
import marq from '../Icons/marqueur.png';

var myIcon = L.icon({
  iconUrl: icon,
  iconSize: [22, 52],
  shadowUrl: "my-icon-shadow.png",
});
var myMarq = L.icon({
    iconUrl: marq,
    iconSize: [45, 50],
    shadowUrl: 'my-icon-shadow.png',
});

const center_map = [49.1191, 6.1727];

export default class MapView extends Component {

  
  constructor(props) {
    super(props);
    const watcher = navigator.geolocation.watchPosition(this.displayLocationInfo);
    this.state = {
      position: [49.1191, 6.1727],
      Place: [],
    }
  }
  componentDidMount() {

    axios.get("https://devweb.iutmetz.univ-lorraine.fr/~schnei349u/api_react/listelieu.php")
      .then(response => {
        this.setState({ Place: response.data })
        console.log(response.data);
        //console.log(this.state.Place[0].coord_nord)

      })
  }
  start = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }
  setTimeout = (() => {
    navigator.geolocation.clearWatch(this.watcher);
  }, 15000);
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
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {this.start()}
        <Marker position={this.state.position} icon={myIcon} className="Marker">
          <Popup>
            <span>Vous êtes ici</span>
          </Popup>
        </Marker>
        {
          this.state.Place.map(
            (Lieu, index) =>
                <Marker position={[Lieu.coord_nord, Lieu.coord_est]} icon={myMarq} className="Marker">
                    <Popup>
                        <span>{Lieu.nom_lieux}</span>
                    </Popup>
                </Marker>

          )
        }
      </Map>
    );
  }
}
