import React, { Component } from 'react';
import '../css/signup.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: {
                name: '',
                age: '',
                email: '',
                gender: '',
                hobbies: [],
                state: '',
                city: ''
            },
            selectedState: ''
        }
    }

    handleState = (event) => {
        this.setState({
            selectedState: event.target.value
        })
    }

    render() {
        const states = [
            { name: 'Tamil Nadu', country_code: 'IN' },
            { name: 'Kerala', country_code: 'IN' },
            { name: 'Maharstra', country_code: 'IN' },
            { name: 'Washington', country_code: 'USA' },
            { name: 'Chicago', country_code: 'USA' },
            { name: 'Texas', country_code: 'USA' },
            { name: 'State - 1 Japan', country_code: 'JN' },
            { name: 'State - 2 Japan', country_code: 'JN' },
            { name: 'State - 3 Japan', country_code: 'JN' },
            { name: 'State - 1 China', country_code: 'CH' },
            { name: 'State - 2 China', country_code: 'CH' },
            { name: 'State - 3 China', country_code: 'CH' },
            { name: 'State - 1 France', country_code: 'FR' },
            { name: 'State - 2 France', country_code: 'FR' },
            { name: 'State - 3 France', country_code: 'FR' },
        ];

        const cities = [
            { name: 'Chennai', country_code: 'IN' },
            { name: 'Banglore', country_code: 'IN' },
            { name: 'Mysore', country_code: 'IN' },
            { name: 'New York', country_code: 'USA' },
            { name: 'Los Angles', country_code: 'USA' },
            { name: 'Indiana', country_code: 'USA' },
            { name: 'Tokyo', country_code: 'JN' },
            { name: 'Beijin', country_code: 'CH' },
            { name: 'Paris', country_code: 'FR' },
        ];

        let stateList = states.map((state, index) => {
            return (
                <option key={index} value={state.country_code}>{state.name}</option>
            )
        });

        let filterCity = cities.filter((city) => {
            return city.country_code == this.state.selectedState;
        }).map((city, index) => {
            return (
                <option key={index}>{city.name}</option>
            )
        })

        let { register } = this.state;

        return (
            <div className="warpper">
                <h2>Registation Page</h2>
                <label>Enter Name:</label>
                <input type="text" placeholder="Enter your name.." />
                <br></br>
                <label>Enter Age:</label>
                <input type="number" placeholder="Enter your age.." />
                <br></br>
                <label>Enter Email:</label>
                <input type="text" placeholder="Enter your email.." />
                <br></br>
                <label>Select Gender:</label>
                <input type="radio" name="gender" />Male
                <input type="radio" name="gender" />Female
                <input type="radio" name="gender" />Others
                <br></br>
                <label>Pick Hobbies:</label>
                <input type="checkbox" />Cricket
                <input type="checkbox" />Football
                <input type="checkbox" />BasketBall
                <input type="checkbox" />Hockey
                <input type="checkbox" />Tennis
                <br></br>
                <label>Select State:</label>
                <select onChange={this.handleState}>
                    <option disabled selected>Select any one State</option>
                    {stateList}
                </select>
                <br></br>
                <label>Select City:</label>
                <select>
                    <option disabled selected>Select any one City</option>
                    {filterCity}
                </select>
                <br></br>
                <button>Submit</button>
            </div>
        );
    }
}

export default SignupPage;