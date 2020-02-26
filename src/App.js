import React from 'react';
import './Design/App.css';
import MapView from './Components/map.js';
import Sider from './Components/menu.js';
import List from './Components/liste.js';
export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      showMapView: true,
      showListeView: false,
    }

    this.showMapView = this.showMapView.bind(this);
    this.showListeView = this.showListeView.bind(this);

  }

  showMapView() {
    this.setState({
      showMapView: true,
      showListeView: false
    })
  }

   showListeView() {
    this.setState({
      showListeView: true,
      showMapView: false
    })
  }

  render(){
    /*if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }*/
    var prout = this.state.showMapView ? "42" : "21";

    var prout;
    if (this.state.showMapView) {
      prout = "42"
    } else {
      prout = "21"
    }
    
    return(
      <div className="body">
        <Sider className= "Sider" showMapView={this.showMapView} showListeView={this.showListeView} />
        {this.state.showMapView ? <MapView className="Map"/> : null }
        {this.state.showListeView ? (
          <div id="liste">
            <List></List>
          </div>) : null
        }
      </div>
    )
  }
}

