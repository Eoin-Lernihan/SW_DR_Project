import React from 'react';
import { Reservations } from './reservations';
import axios from 'axios';

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
                <h1>This is the read component.</h1>
                <Reservations reservations={this.state.reservations} ReloadData={this.ReloadData}></Reservations>
            </div>
        );
    }
}

