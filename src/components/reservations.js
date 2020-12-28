import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {CurrentBookings} from './CurrentBookings';

export class Reservations extends React.Component{

    render(){
      
        return this.props.reservations.map( (reservations)=>{ 
            return <CurrentBookings reservations={reservations} ReloadData={this.props.ReloadData}></CurrentBookings>
           
        })
   
    }
}