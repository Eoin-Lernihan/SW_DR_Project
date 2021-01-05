//Helps make the Current Bookings page and Home page
import React from 'react';
import {CurrentBookings} from './CurrentBookings';

export class Reservations extends React.Component{

    render(){
      
        return this.props.reservations.map( (reservations)=>{ 
            return <CurrentBookings reservations={reservations} ReloadData={this.props.ReloadData}></CurrentBookings>
           
        })
   
    }
}