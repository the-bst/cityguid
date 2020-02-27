import React, { Component} from "react";
import "../Design/map.css";
import axios from 'axios';
import "../Design/liste.css";
import 'antd/dist/antd.css';
import { Carousel, Input } from 'antd';
const { Search } = Input;
export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Place: [],
            Textee : "",
            error : false,
            value :"",
        }
    }

    getData = async () =>{
      await axios.get("https://devweb.iutmetz.univ-lorraine.fr/~schnei349u/api_react/listelieu.php")
          .then(response => {
              this.setState({ Place: response.data })

          })
    }
    componentDidMount() {
      this.getData();
    }
    handleChange = async (event) => {
        this.errorOn();
        var Textee =await event.target.value.toLowerCase();
        this.setState({ Textee })
        //console.log("Erreur avant map :"+ this.state.error);
        this.state.Place.map(
            (Lieu, index) =>
            {
              //console.log("taille textee "+this.state.Textee.lengt);
               if (!this.state.Textee==""){
                if (Lieu.nom_lieux.toLowerCase().includes(this.state.Textee.toLowerCase())) {
                  this.errorOff();
      }
    }
    }
    );
    //console.log("Erreur après map :"+ this.state.error);
    if (!this.state.Textee==""){
      this.setState({value:Textee});
      this.checkError();
    }
  }

    errorOn = () =>{
      if(!this.state.error){
        this.setState({error:true});
      }
    }

    errorOff = () =>{
      if(this.state.error){
        this.setState({error:false});
      }
    }

    checkError = () =>{
      if(this.state.error){
        alert("Aucun batiment avec ce nom");
          this.setState({value:"",Textee:""});
      }
    }


    render() {
        return (
            <div>
            <div>
            <Search
              onChange={this.handleChange}
              placeholder="Rechercher..."
              size="large"
              value={this.state.value}
            />
            </div>
            <div className="all_list">
            {

                this.state.Place.map(
                    (Lieu, index) =>
                    { if (this.state.Textee==="")

                        return <section className="monument_part">

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


                    else if (Lieu.nom_lieux.toLowerCase().includes(this.state.Textee.toLowerCase())) {
                        return <section className="monument_part">

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

                    }
                    //else if (this.state.Erreur == false)
                    //{
                    //    alert("Erreur")
                   // }
                    }
                )


            }


            </div>
            </div>
    )
    }
}
