class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        );
    };
}

