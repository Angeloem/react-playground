import React, { Component } from 'react';

export default class Form extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("component mounted")
    }

    render() {
        return (
            <div>
                {this.props.properties}
            </div>
        );
    }
}
