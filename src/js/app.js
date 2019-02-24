class App extends React.Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            formresults: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(results){

        const formresults = results;
        
        this.setState( () => {
                return {
                    formresults
                };
            }
        );
    }

    render() {
        return (
            <div className="container">
                <LoginForm onFormSubmit={this.handleFormSubmit} />
                <div>
                    {this.state.formresults}
                </div>
            </div>
        );
    };
}

var root = document.getElementById('root');
ReactDOM.render(<App />, root);