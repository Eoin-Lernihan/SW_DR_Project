import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeNumbersOfPeople = this.onChangeNumbersOfPeople.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.state = {
           id: null,
            Date: null,
            Time: null,
            NumbersOfPeople: null,
            ContactNumber: '',
        }
    }

    componentDidMount(){
        console.log("load "+this.props.match.params.id);

        axios.get('http://localhost:4000/api/bookings/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Date:response.data.Date,
                Time:response.data.Time,
                NumbersOfPeople:response.data.NumbersOfPeople,
                ContactNumber:response.data.ContactNumber,
                _id:response.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onChangeTime(e) {
        this.setState({
            Time: e.target.value
        });
    }

    onChangeNumbersOfPeople(e) {
        this.setState({
            NumbersOfPeople: e.target.value
        });
    }
    onChangeContactNumber(e) {
        this.setState({
            ContactNumber: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("The Booking has been updated");

            const changedBookings ={
                Date:this.state.Date,
                Time:this.state.Time,
                NumbersOfPeople:this.state.NumbersOfPeople,
                ContactNumber:this.state.ContactNumber
            };

        // axios.post('http://localhost:4000/api/movies', newMovie)
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));    
            axios.put('http://localhost:4000/api/bookings/'+this.state._id, changedBookings)
            .then((xyz)=>{
                console.log(xyz);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App' style={{ width:'50%', margin: 'auto'}}>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Add Booking Date: </label>
                        <input type='date'
                            className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>
                    <div className='form-group'>
                        <label>Bookings time: </label>
                        <select id="dropdown" value={this.state.time} onChange={this.onChangeTime}>
                            <option value="17:00-18:00">17:00-18:00</option>
                            <option value="18:00-19:00">18:00-19:00</option>
                            <option value="19:00-20:00">19:00-20:00</option>
                            <option value="20:00-21:00">20:00-21:00</option>
                        </select>                       
                    </div>
                    <div className="form-group">
                        <label>How many is it for (1-6 people) : </label>
                        <input type='number' min="1" max="6"
                            className='form-control'
                            value={this.state.NumbersOfPeople}
                            onChange={this.onChangeNumbersOfPeople}></input>
                    </div>
                    <div className="form-group">
                        <label>Add your phone number : </label>
                        <input type='tel'
                            className='form-control'
                            value={this.state.ContactNumber}
                            onChange={this.onChangeContactNumber}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Booking'
                            className='btn btn-primary'></input>
                    </div>
              
                </form>
            </div>
        );
    }
}