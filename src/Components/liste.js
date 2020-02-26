import React, { Component } from "react";
import "../Design/map.css";
import axios from 'axios';
import "../Design/liste.css";

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
                    <section className="liste_monuments">
                        <h1>{Lieu.nom_lieux}</h1>
                        <img src={Lieu.image} className="bdd_img"/>
                        <p className="bdd_desc">{Lieu.description}</p>
                        <br />
                        <a href={Lieu.lien}>Pour en savoir plus...</a>
                    </section>
                )
            }
            </div>
        )
    }
}