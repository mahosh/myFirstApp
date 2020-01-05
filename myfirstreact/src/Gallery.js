import React, { Component } from 'react';
import './Gallery.css';
import actorsData from './Actors.json';
import ActorComp from "./ActorComp.js";

export default class Gallery extends Component {

    constructor(props) {
      super(props);
      
    this.state = {
          actors: actorsData.map(currentActor => new ActorComp(currentActor))
      }
      
    }
    render() {
        console.log(this.state.actors);
        return(
            <div>
            </div>
        )
    }
}