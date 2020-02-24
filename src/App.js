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
    return(
      <div>
        <Sider className = "Sider"></Sider>
        <MapView className = "Map"></MapView>
      </div>
    )
  }
}
