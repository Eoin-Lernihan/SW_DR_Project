import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

export class CurrentBookings extends React.Component {

    constructor() {
        super();
        this.DeleteBookings = this.DeleteBookings.bind(this);
    }

    DeleteBookings(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/bookings/'+this.props.reservations._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        
        return (
            
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{this.props.reservations.Name}</Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>
                </div>
               
        );
       
    }
}