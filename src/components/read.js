//Helps make the current bookings page
import React from 'react';
import { Reservations } from './reservations';
import axios from 'axios';
export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
        this.onChagnedFutureOnly = this.onChagnedFutureOnly.bind(this);
    }

    state = {
        //makes it default to show only future bookings
        futureOnly: 'true',
        reservations: []
    };
    
    ReloadData(){
        axios.get('http://localhost:4000/api/bookings',{
            params: {
              futureOnly: this.state.futureOnly
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
            futureOnly: this.state.futureOnly
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
            <div>
                <card style={{ width: '20rem', margin: 'auto' }}> 
                 {/*Allows for the channing futureOnly however it takes 3 clicks to start working */}
               <h4>If you would like to see previous Reservations, please click on me \
                    <input type="checkbox" onChange={this.onChagnedFutureOnly}></input>/</h4>       
                </card>
                <Reservations reservations={this.state.reservations} ReloadData={this.ReloadData}></Reservations>
            </div>
           
        );
    }
    onChagnedFutureOnly(e) {
        //Allows for the channing futureOnly  form true-flase and flase-true 
        alert("Loading Bookings");
        this.setState({
            futureOnly: e.target.checked
        });
        this.ReloadData();
    }

}

