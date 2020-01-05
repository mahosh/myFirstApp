import React, { Component } from 'react';
import './Actor.css';
import Card from 'react-bootstrap/Card';

export default class ActorComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: props.fName,
            lName: props.lName,
            bDate: props.bDate,
            imgLink: props.imgLink,
            imdbLink: props.imdbLink,
            age: function(){
                const currentYear = new Date().getFullYear();
                const birthDate = new Date(this.bDate);
                var currentAge = currentYear - birthDate.getFullYear();
                return(currentAge);    
            }
        }
    }
    render() {
        return(
            <Card>
                <Card.Img src={this.state.imgLink}></Card.Img>
                <Card.Title>{this.state.fName} {this.state.lName}</Card.Title>
                <Card.Text>{this.state.age}</Card.Text>
            </Card>
        )
    }
}