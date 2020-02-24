import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Design/map.css';
import L from 'leaflet';
import icon from './BEBER.png'

var myIcon = L.icon({
  iconUrl: icon,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: 'my-icon-shadow.png',
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

const position = [49.1191, 6.1727];

export default class MapView extends React.Component {
    render() {
        return (
                    <Map center={position} zoom={13} className="Map">
                        <TileLayer
                          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position} icon={myIcon} className="Marker">
                          <Popup>
                            <span>C EST BEBER</span>
                          </Popup>
                        </Marker>
                      </Map>
        );
    }
}
