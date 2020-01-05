import React, { Component } from 'react';
import logo from './logo.svg';
import './Gallery.css';
import actorsData from './Actors.json';
import ActorComp from "./ActorComp.js";

export default class Gallery extends Component {

    constructor(props) {
      super(props);
      
   /*   this.state = {
          actors: actorsData.data.map(currentActor => new ActorComp(currentActor))
      }*/
      
    }
    render() {
        return(
            <div>
                HELLLOO!!!
            </div>
        )
    }
}