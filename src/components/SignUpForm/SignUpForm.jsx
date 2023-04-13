import { Component } from 'react';

import { signUp } from '../../utilities/usersService';


export default class SignUpForm extends Component {
    state = {
        name: '',
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
           const formData = {...this.state}
           delete formData.error 
           delete formData.confirm

           const user = await signUp(formData)
           console.log(user)
        } catch(err) {
            this.setState({ error: "Sign Up Failed - Try again" })
        }
        //take our state data
        //send it to db
        //wait for a response back
        //update the 'user' state
    }

    

    render() {
    const disable = this.state.password !== this.state.confirm;
    return (
        <div>
        <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input 
                type="text"
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                required 
            />
            <button onClick={this.handleChange} type="submit" disabled={disable}>LOG IN</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
        );
    }      
}
