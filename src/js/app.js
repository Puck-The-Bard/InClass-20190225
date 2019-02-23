class App extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                Something goes here
            </div>
        );
    };
}

var root = document.getElementById('root');
ReactDOM.render(<App />, root);