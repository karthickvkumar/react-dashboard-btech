import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
        let stateObj = JSON.parse(event.target.value)
        let data = { ...this.state.register, city: '', state: stateObj.name };
        this.setState({
            selectedState: stateObj.state_code,
            register: data
        })

    }

    handleChange = (event) => {
        let data;
        if (Array.isArray(this.state.register[event.target.name])) {
            if (event.target.checked) {
                this.state.register.hobbies.push(event.target.value);
            }
            else {
                this.state.register.hobbies.pop();
            }
            data = { ...this.state.register, hobbies: this.state.register.hobbies };
        }
        else {
            data = { ...this.state.register, [event.target.name]: event.target.value };
        }
        this.setState({
            register: data
        })
    }

    onSubmit = () => {
        console.log(this.state.register);
        this.props.history.push('/home')
    }

    render() {
        const states = [
            { name: 'Tamil Nadu', state_code: 'TN' },
            { name: 'Kerala', state_code: 'KL' },
            { name: 'Maharstra', state_code: 'MH' },
            { name: 'Karnataka', state_code: 'KA' }
        ];

        const cities = [
            { name: 'Chennai', state_code: 'TN' },
            { name: 'Coimbatore', state_code: 'TN' },
            { name: 'Erode', state_code: 'TN' },
            { name: 'Madurai', state_code: 'TN' },
            { name: 'Banglore', state_code: 'KA' },
            { name: 'Mysore', state_code: 'KA' },
            { name: 'Hubli', state_code: 'KA' },
            { name: 'Cochin', state_code: 'KL' },
            { name: 'Calicut', state_code: 'KL' },
            { name: 'Munnar', state_code: 'KL' },
            { name: 'Mumbai', state_code: 'MH' },
            { name: 'Pune', state_code: 'MH' },
            { name: 'Nashik', state_code: 'MH' },
        ];

        let stateList = states.map((state, index) => {
            return (
                <option key={index} value={JSON.stringify(state)}>{state.name}</option>
            )
        });

        let filterCity = cities.filter((city) => {
            return city.state_code === this.state.selectedState;
        }).map((city, index) => {
            return (
                <option key={index} value={city.name}>{city.name}</option>
            )
        })

        let { register } = this.state;

        return (
            <div className="warpper">
                <h2>Registation Page</h2>
                <label>Enter Name:</label>
                <input type="text" placeholder="Enter your name.." name="name" onChange={this.handleChange} />
                <br></br>
                <label>Enter Age:</label>
                <input type="number" placeholder="Enter your age.." name="age" onChange={this.handleChange} />
                <br></br>
                <label>Enter Email:</label>
                <input type="text" placeholder="Enter your email.." name="email" onChange={this.handleChange} />
                <br></br>
                <label>Select Gender:</label>
                <input type="radio" name="gender" onChange={this.handleChange} value="male" />Male
                <input type="radio" name="gender" onChange={this.handleChange} value="female" />Female
                <input type="radio" name="gender" onChange={this.handleChange} value="others" />Others
                <br></br>
                <label>Pick Hobbies:</label>
                <input type="checkbox" name="hobbies" onChange={this.handleChange} value="circker" />Cricket
                <input type="checkbox" name="hobbies" onChange={this.handleChange} value="football" />Football
                <input type="checkbox" name="hobbies" onChange={this.handleChange} value="basketball" />BasketBall
                <input type="checkbox" name="hobbies" onChange={this.handleChange} value="hockey" />Hockey
                <input type="checkbox" name="hobbies" onChange={this.handleChange} value="tennis" />Tennis
                <br></br>
                <label>Select State:</label>
                <select onChange={this.handleState} defaultValue={""} name="state">
                    <option disabled value="">Select any one State</option>
                    {stateList}
                </select>
                <br></br>
                <label>Select City:</label>
                <select value={register.city} onChange={this.handleChange} name="city">
                    <option disabled value="">Select any one City</option>
                    {filterCity}
                </select>
                <br></br>
                <button onClick={() => this.onSubmit()}>Submit</button>
                <NavLink to="/feeds" className="button">Go to News Feeds</NavLink>
            </div>
        );
    }
}

export default SignupPage;