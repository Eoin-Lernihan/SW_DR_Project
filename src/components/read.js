import React from 'react';
import { Reservations } from './reservations';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        reservations: []
    };

    ReloadData(){
        axios.get('http://localhost:4000/api/bookings')
            .then((response) => {
                this.setState({ reservations: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/bookings')
            .then((response) => {
                this.setState({ reservations: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            
            <div>
                <Reservations reservations={this.state.reservations} ReloadData={this.ReloadData}></Reservations>
            </div>
           
        );
    }
}

