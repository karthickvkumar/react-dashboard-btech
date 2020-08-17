import React, { Component } from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resister_date: {
                name: 'Mr.A',
                age: 20,
                position: "UI Developer",
                location: '',
            },
            error: {
                name: false,
                age: false,
                position: false,
                location: false,
            },
            status: false,
        }
    }


    handleDate = (event) => {
        let formData = { ...this.state.resister_date, [event.target.name]: event.target.value }

        this.setState({
            resister_date: formData
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state.resister_date)
    }

    onBlurInput = (event) => {
        if (event.target.value == '') {
            let errorData = { ...this.state.error, [event.target.name]: true }
            this.setState({
                error: errorData
            })
        }
    }

    onFocusInput = (event) => {
        let errorData = { ...this.state.error, [event.target.name]: false }
        this.setState({
            error: errorData
        })
    }

    disableLocation = () => {

        this.setState({
            status: !this.state.status
        })
    }

    render() {
        let { resister_date, error } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <h3>The User Name is : {resister_date.name}</h3>
                    <input type="text" name="name" placeholder="Please enter name.." onChange={this.handleDate} value={resister_date.name} onBlur={this.onBlurInput} onFocus={this.onFocusInput} />

                    {error.name && <span>Please enter you User Name</span>}

                    <h3>The User Age is : {resister_date.age}</h3>
                    <input type="text" name="age" placeholder="Please enter age.." onChange={this.handleDate} value={resister_date.age} onBlur={this.onBlurInput} onFocus={this.onFocusInput} />

                    {error.age && <span>Please enter you User Age</span>}

                    <h3>The User Position is : {resister_date.position}</h3>
                    <input type="text" name="position" placeholder="Please enter position.." onChange={this.handleDate} value={resister_date.position} />
                    <br></br>
                    <button onClick={this.disableLocation}>Disable Location</button>

                    {this.state.status ?
                        <div>
                            <h3>The User location is : {resister_date.location}</h3>
                            <input type="text" name="location" placeholder="Please enter location.." onChange={this.handleDate} value={resister_date.location} />
                        </div>
                        :
                        <div>
                            <h2>Info: User Location is no longer needed!</h2>
                        </div>
                    }

                    <br></br>

                    <input type="submit" value="SEND" />
                </form>
            </div>
        );
    }
}

export default ListItems;