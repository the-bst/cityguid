import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./map";
import { Marker } from 'leaflet';

export default class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
        
    }
  }

  render(){
    return(
      <div>
        <Map>
          <Marker>
          </Marker>
        </Map>
      </div>
    )
  }
}
