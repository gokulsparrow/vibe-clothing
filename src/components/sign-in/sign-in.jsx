import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'; 

import './sign-in.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email:'', password:'' })
    }
    handleChange = (event) => {
        const { value,name } = event.target;

        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign-in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    label='email' 
                    value={this.state.email} required/>
                    
                    <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={this.handleChange} 
                    label='password' 
                    value={this.state.password} required/>

                    <CustomButton name='Submit' type='submit' >
                        SignIn
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;