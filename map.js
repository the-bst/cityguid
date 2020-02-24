import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import L from 'leaflet';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

class Map extends React.Component{

    componentDidMount(){
        this.map = L.map('map', {
            center: [49.1191, 6.1727],
            zoom: 14
        });

        this.icon = L.icon({
            iconUrl:'./Images/cathédrale.jpg',

            iconSize: [38,95],
            iconAnchor: [22,94],
            popupAnchor: [-3, -76]
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17     
        }).addTo(this.map); 

    }

    render(){
        return <Wrapper width="100%" height="100vh" id="map"/>
    }
}
export default Map