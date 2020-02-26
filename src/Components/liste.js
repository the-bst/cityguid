import React, { Component } from "react";
import "../Design/map.css";
import axios from 'axios';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Place: [],
        }
    }
    componentDidMount() {

        axios.get("https://devweb.iutmetz.univ-lorraine.fr/~schnei349u/api_react/listelieu.php")
            .then(response => {
                this.setState({ Place: response.data })
                //console.log(this.Place);
            })
    }

    render() {
        return (
            <div>
            {
                this.state.Place.map(
                    (Lieu, index) =>
                        <p>{Lieu.nom_lieux}</p>
                )
            }
            </div>
        )
    }
}