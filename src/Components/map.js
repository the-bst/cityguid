import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../Design/map.css";
import L from "leaflet";
import icon from "../location-arrow-solid.svg";
import axios from 'axios';
import marq from '../marqueur.png';

var myicon = L.icon({
  iconUrl: icon,
  iconSize: [22, 52],
  shadowUrl: "my-icon-shadow.png",
});
var mymarq = L.icon({
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
      liste_bat: {},
    }
  }
  batiment_proche = (liste_bati_dist) => {
    // console.log(liste_bati_dist);
    var nearest = 101;
    var nom;
    // console.log(Object.keys(liste_bati_dist).length);
    if(Object.keys(liste_bati_dist).length == 1){
      for(var key in liste_bati_dist){
        window.prompt("sometext","defaultText");
      }
    }
    else if(Object.keys(liste_bati_dist).length > 1){
    for(var key in liste_bati_dist){
      if(liste_bati_dist[key] < nearest){
        nearest = liste_bati_dist[key];
        // console.log(nearest);
        nom = key;
        // console.log(nom);
      }
    }
    alert("Vous êtes proche de "+ nom);
  }
        
}
  get_monument = async () => {
    await axios.get("https://devweb.iutmetz.univ-lorraine.fr/~schnei349u/api_react/listelieu.php")
      .then(response => {
        this.setState({ Place: response.data })
        //console.log(response.data);
        let liste_bat = {};
        this.state.Place.map(
          (Lieu, index) => {
            liste_bat[Lieu.nom_lieux] = 0;
          }
        )
        this.setState({ liste_bat });
      });

  }
  componentDidMount() {
    this.get_monument();
    this.start();
  }
  start = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }
  setTimeout = (() => {
    navigator.geolocation.clearWatch(this.watcher);
  }, 15000);
  displayLocationInfo = (position) => {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    var position = [];
    var tab_bat_dist = {};
    position.push(lat);
    position.push(lng);
    this.setState({ position, });
    var latlng = L.latLng(lat, lng);
    this.state.Place.map(
      (Lieu, index) => {
        var latlng2 = L.latLng(Lieu.coord_nord, Lieu.coord_est);
        var distance = latlng2.distanceTo(latlng);
        if (distance < 100) {
          if (this.state.liste_bat[Lieu.nom_lieux] == 0) {
            tab_bat_dist[Lieu.nom_lieux] = distance;
            this.state.liste_bat[Lieu.nom_lieux] = 1;
          }
        }
        else {
          if (this.state.liste_bat[Lieu.nom_lieux] == 1) {
            this.state.liste_bat[Lieu.nom_lieux] = 0;
          }
        }
      }
    )
    this.batiment_proche(tab_bat_dist);
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
        <Marker position={this.state.position} icon={myicon} className="Marker">
          <Popup>
            <span>Vous êtes ici</span>
          </Popup>
        </Marker>
        {
          this.state.Place.map(
            (Lieu, index) =>
              <Marker position={[Lieu.coord_nord, Lieu.coord_est]} icon={mymarq} key={Lieu.nom_lieux} className="Marker">
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
