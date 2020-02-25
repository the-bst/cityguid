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

<<<<<<< HEAD
  render(){    
   
=======
  render(){
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }
    
    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
    
      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }*/
    const watcher = navigator.geolocation.watchPosition(displayLocationInfo);

    setTimeout(() => {
      navigator.geolocation.clearWatch(watcher);
    }, 5000);

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
>>>>>>> b80ffbf98f447980d5bda760a2d424b98fcb88ee
    return(
      <div>
        <Sider className = "Sider"></Sider>
        <MapView className = "Map"></MapView>
      </div>
    )
  }
}
