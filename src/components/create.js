import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();



        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeNumbersOfPeople = this.onChangeNumbersOfPeople.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.state = {
            Name: '',
            Date: null,
            Time: null,
            NumbersOfPeople: null,
            ContactNumber: '',
            Email: ''
        }
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
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
        })
    }
    onChangeNumbersOfPeople(e) {
        this.setState({
            NumbersOfPeople: e.target.value
        })
    }
    onChangeContactNumber(e) {
        this.setState({
            ContactNumber: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Booking: " + this.state.Name + " for "
            + this.state.Date + " at " +
            this.state.Time + " for " +
            this.state.NumbersOfPeople + " has been booked");

        const newBooking = {
            Name: this.state.Name,
            Date: this.state.Date,
            Time: this.state.Time,
            NumbersOfPeople: this.state.NumbersOfPeople,
            ContactNumber: this.state.ContactNumber,
            Email: this.state.Email,
        };

        axios.post('http://localhost:4000/api/bookings', newBooking)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add your name for the booking : </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
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
                            <option value="N/A">N/A</option>
                            <option value="17:00-18:00">17:00-18:00</option>
                            <option value="2">18:00-19:00</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
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
                        <label>Add your email : </label>
                        <input type='email'
                            className='form-control'
                            value={this.state.Email}
                            onChange={this.onChangeEmail}></input>
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