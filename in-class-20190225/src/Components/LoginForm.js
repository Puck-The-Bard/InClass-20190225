import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            results: '',
            validation_input_password_class: 'form-control',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    } 

    //handler for data from child component
    onEmailChange(email){
        
        console.log("From the child: " + email);

        this.setState( () => {
                return {
                    email
                };
            }
        );

        console.log("From the parent state: " + this.state.email);
    }

    //handler for data from child component
    onPasswordChange(password){
        
        console.log("From the child: " + password);

        this.setState( () => {
                return {
                    password
                };
            }
        );

        console.log("From the parent state: " + this.state.password);
    }

    onSubmit(event){

        event.preventDefault();

        const results = "--Email address is: " + this.state.email + "--Password: " + this.state.password;

        this.validateForm();

        this.setState( () => {
                return {
                    results
                };
            }
        );

        //this is also lifting state to the parent
        this.props.onFormSubmit(results);

    }

    validateForm(){
        let password = this.state.password;
        let FormIsValid = true;
        let error_password = this.state.error_password;
        let validation_input_password_class = this.state.validation_input_password_class;

        //check to see if a password was entered
        if(!password)
        {
            FormIsValid = false;
            error_password = "you must enter a password or risk catastrophy"
        }
        else
        {
            error_password = "";
        }

        //check to see if the password is long enough

        if(password.length >= 8)
        {
            console.log("PASSWORD IS GOOD BRO, YOU'RE GOING ALL THE WAY")
        }
        else
        {
            //invald password will chastise the user
            let error_password_message = "you must have a password of at least 8 characters";
            error_password = error_password_message;
            validation_input_password_class = "form-control is-invalid";
            console.log(error_password_message);
            
            
        }

        this.setState( () => {
            return{
                error_password,
                validation_input_password_class,
                };
            }
        );

    };
    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} />
                    
                    <PasswordInput onPasswordInputChange = {this.onPasswordChange}
                                    PasswordInputValidationClass = {this.state.validation_input_password_class}
                                    passwordErrorMesage = {this.state.error_password}/>
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;
