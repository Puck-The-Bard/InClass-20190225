class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            password: ''
        };

        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onPasswordChange(event)
    {
        var password = (event.target.value);


        this.props.onPasswordInputChange(password);

        this.setState( () => {
                return{
                    password
                }
            }
        );
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                 className = {this.props.PasswordInputValidationClass}
                 type="password"
                 className="form-control"
                 id="exampleInputPassword1"
                 placeholder="Password"
                 onChange={this.onPasswordChange}
                 value = {this.state.password}
                 required
                />
            
            <div className = {this.props.passwordErrorMesage}></div>
           </div>
        );
    };
}

