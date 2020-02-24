import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './Design/map.scss';

const position = [37.335556, -122.009167];

export default class MapView extends React.Component {
    render() {
        return (
                    <Map center={position} zoom={13}>
                        <TileLayer
                          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                          <Popup>
                            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                          </Popup>
                        </Marker>
                      </Map>
        );
    }
}
