//Helps make the home page
import React from 'react';
import { Reservations } from './reservations';
import axios from 'axios';
var util = require('util')
export class Content extends React.Component {
    constructor(){
        super();
        this.loadData = this.loadData.bind(this);
        
    }
    state = {
        reservations: []
    };
    loadData(){
        axios.get('http://localhost:4000/api/bookings',{
            params: {
                   /* Used to make cards information  with toadys date only*/
                todayOnly: 'true'
            }
          })
            .then((response) => {
                this.setState({ reservations: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/bookings',{
            params: {
                 /* Used to make cards information  with toadys date only*/
            todayOnly: 'true'
            }
          })
            .then((response) => {
                this.setState({ reservations: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
                <div  style={{ margin: 'auto' }}>
                    <h1>Chow Down</h1> 
                    <p></p>
                     <h2>its on The Dime Dining</h2>
                    <img style={{ margin: 'auto',   width: '18rem', height: '18 rem'}} src="homePicture.jpg" alt="Cartoon Image"></img>
                    <p></p>
                   {/* Used to make cards containing made bookings information */}
                    <Reservations reservations={this.state.reservations} loadData={this.loadData}></Reservations>             
                </div>
        );
    }
}