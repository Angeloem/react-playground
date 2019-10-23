import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import ErrorBoundry from './ErrorBoundry'
import Scrollable from './Scrollable'
import robots from './robots'
import './App.css'
// eslint-disable-next-line no-unused-vars
import {searchRobots} from "./reducers";
import {setSearchField} from "./actions";

const mapStateToProps = state => {
    return {
        searchField: state["searchRobots"].searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

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

        /*my own presentation of forms using react*/
        return(
            <div className={'tc'}>
                <h1 className={'f1'}>Robotics</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                {/*<div>*/}
                {/*    <Form properties={`nickie nyau`} />*/}
                {/*</div>*/}
                <Scrollable>
                    <ErrorBoundry>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scrollable>
            </div>
        )


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
