import React, {Component} from 'react';
import {connect} from 'react-redux'
import Cardlist from './Cardlist';
import SearchBox from './Searchbox';
import ErrorBoundary from './ErrorBoundry'
import Scrollable from './Scrollable'
import './App.css'
// eslint-disable-next-line no-unused-vars
import {setSearchField} from "./actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robots : [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')//fetch it from an online API
            .then(response => response.json())//convert it into json
            .then(users => this.setState({robots: users}))//assign it to robots
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase()
                .includes(this.state.searchFile.toLowerCase()
                );
        });
        /*my own presentation of forms using react*/
        return(
            <div className={'tc'}>
                <h1 className={'f1'}>Robotics</h1>
                <SearchBox searchChange = {onSearchChange}/>
                {/*<div>*/}
                {/*    <Form properties={`nickie nyau`} />*/}
                {/*</div>*/}
                <Scrollable>
                    <ErrorBoundary>
                        <Cardlist robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scrollable>
            </div>
        )


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
