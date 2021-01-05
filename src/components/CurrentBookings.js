import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { CardDeck } from 'react-bootstrap';

export class CurrentBookings extends React.Component {

    constructor() {
        super();
        this.DeleteBookings = this.DeleteBookings.bind(this);
    }

    DeleteBookings(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/bookings/' + this.props.reservations._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
var cts = this.props.reservations.Date,
      cdate = (new Date(cts)).toLocaleDateString ();
        return (
            <div>
                <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Header stlye={{ bg: 'dark' }}>{this.props.reservations.Name}</Card.Header>
                    <Card.Body>                 
                        {cdate}
                        <p></p>
                        {this.props.reservations.Time}
                        <p></p>
                        {this.props.reservations.NumbersOfPeople}
                        <p></p>
                        <Button variant="danger" onClick={this.DeleteBookings}>Delete</Button>
                        <Link to={'/edit/' + this.props.reservations._id} className="btn btn-primary">Edit</Link>
                    </Card.Body>
                </Card>
            </div>
        );

    }
}