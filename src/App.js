import React from 'react';
import './App.css';
import MapView from './map.js';
import Sider from './menu.js';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
    }

  }

  render(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }
    
    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
    
      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
    return(
      <div>
        <Sider className = "Sider"></Sider>
        <MapView className = "Map"></MapView>
      </div>
    )
  }
}
