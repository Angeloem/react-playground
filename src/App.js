import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import ErrorBoundry from './ErrorBoundry'
import Scrollable from './Scrollable'
import robots from './robots'
import './App.css'
import Form from "./forms/forms";


class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchFile : '',
            isNotLoaded : false
        }
    }
    onSearchChange = (event) => {
        this.setState({searchFile : event.target.value })
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')//fetch it from an online API
            .then(response => response.json())//convert it into json
            .then(users => this.setState({robots: users}))//assign it to robots
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
                return robots.name.toLowerCase().includes(this.state.searchFile.toLowerCase());
            });

        return(
            <div className={'tc'}>
                <h1 className={'f1'}>Robotics</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <div>
                    <Form properties={`nickie nyau`} />
                </div>
                <Scrollable>
                    <ErrorBoundry>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scrollable>
            </div>
        )


    }
}

export default App;
