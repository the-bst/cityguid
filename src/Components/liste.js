import React, { Component } from "react";
import "../Design/map.css";
import axios from "axios";
import "../Design/liste.css";
import "antd/dist/antd.css";
import { Carousel, Input } from "antd";
import Fade from "react-reveal";
const { Search } = Input;

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Place: [],
      Textee: "",
      Erreur: false
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://devweb.iutmetz.univ-lorraine.fr/~schnei349u/api_react/listelieu.php"
      )
      .then(response => {
        this.setState({ Place: response.data });
      });
  }
  handleChange = event => {
    const Textee = event.target.value.toLowerCase();
    this.setState({ Textee });
    console.log(this.state.Textee);
  };

  render() {
    return (
      <div>
        <div>
          <Search
            onChange={this.handleChange}
            placeholder="Rechercher..."
            size="large"
          />
        </div>
        <div className="all_list">
          {this.state.Place.map((Lieu, index) => {
            if (this.state.Textee === "")
              return (
                <section className="monument_part">
                  <Fade left>
                    <h1 className="title_mon">{Lieu.nom_lieux}</h1>
                  </Fade>
                  <Fade right>
                  <Carousel autoplay>
                    <img src={Lieu.image} className="img_mon" />
                    <img src={Lieu.image2} className="img_mon" />
                    <img src={Lieu.image3} className="img_mon" />
                  </Carousel>
                  </Fade>
                  <Fade>
                  <div className="description_bg">
                    <p className="description_text">{Lieu.description}</p>
                    <a href={Lieu.lien} className="wiki_link">
                      Pour en savoir plus...
                    </a>
                  </div>
                  </Fade>
                </section>
              );
            else if (
              Lieu.nom_lieux
                .toLowerCase()
                .includes(this.state.Textee.toLowerCase())
            ) {
              return (
                <section className="monument_part">
                  <Fade left>
                    <h1 className="title_mon">{Lieu.nom_lieux}</h1>
                  </Fade>
                  <Fade right>
                    <Carousel autoplay>
                      <img src={Lieu.image} className="img_mon" />
                      <img src={Lieu.image2} className="img_mon" />
                      <img src={Lieu.image3} className="img_mon" />
                    </Carousel>
                  </Fade>
                  <Fade>
                    <div className="description_bg">
                      <p className="description_text">{Lieu.description}</p>
                      <a href={Lieu.lien} className="wiki_link">
                        Pour en savoir plus...
                      </a>
                    </div>
                  </Fade>
                </section>
              );
            }
            //else if (this.state.Erreur == false)
            //{
            //    alert("Erreur")
            // }
          })}
        </div>
      </div>
    );
  }
}
