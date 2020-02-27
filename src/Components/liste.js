import React, { Component } from "react";
import "../Design/map.css";
import axios from 'axios';
import "../Design/liste.css";
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

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
            <div className="all_list">
            {
                this.state.Place.map(
                    (Lieu, index) =>
                    <section className="monument_part">
                        <h1 className="title_mon">{Lieu.nom_lieux}</h1>
                        <Carousel autoplay>
                            <img src={Lieu.image} className="img_mon"/>
                            <img src={Lieu.image2} className="img_mon"/>
                            <img src={Lieu.image3} className="img_mon"/>
                        </Carousel>
                        <div className="description_bg">
                          <p className="description_text">{Lieu.description}</p>
                          <a href={Lieu.lien} className="wiki_link">Pour en savoir plus...</a>
                        </div>
                    </section>
                )
            }
            </div>
        )
    }
}