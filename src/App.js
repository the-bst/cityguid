import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapView from './map.js';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
    }

  }

  render(){
    return(
      <MapView></MapView>
    )
  }
}
