import React from 'react';
import { Reservations } from './reservations';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
        this.onChagnedFutureOnly = this.onChagnedFutureOnly.bind(this);
    }

    state = {

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
                   If you would like to see upcoming Reservations, please click on me \
                    <input type="checkbox" onChange={this.onChagnedFutureOnly}></input>/                
                </card>
                <Reservations reservations={this.state.reservations} ReloadData={this.ReloadData}></Reservations>
            </div>
           
        );
    }
    onChagnedFutureOnly(e) {
        alert("Loading Bookings");
        this.setState({
            futureOnly: e.target.checked
        });
        this.ReloadData();
    }

}

