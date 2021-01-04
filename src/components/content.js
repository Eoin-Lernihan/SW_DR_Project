import React from 'react';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-responsive-carousel';
import { CardDeck } from 'react-bootstrap';
var util = require('util')
export class Content extends React.Component {

    render() {
        return (

            
              
               <Carousel>
               
                  
                        <div class="carousel-item active" style={{ margin: 'auto' }}>
                        <h1>On The Dime Dining</h1>
                            <img class="d-block w-50" style={{ margin: 'auto' }} src="homePicture.jpg" alt="Cartoon Image"></img>

                        </div>
                        <div class="carousel-item">
                            <Card  style={{ margin: 'auto' }}>
                                <Card.Header stlye={{ bg: 'dark' }}>ad</Card.Header>
                                <Card.Body>
                                    Check
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="carousel-item">
                            <Card class="d-block w-50" style={{ margin: 'auto' }}>
                                <Card.Header stlye={{ bg: 'dark' }}>ad</Card.Header>
                                <Card.Body>
                                    ing
                                </Card.Body>
                            </Card>
                        </div>
                    
                </Carousel>
            
        );
    }
}