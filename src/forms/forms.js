import React, { Component } from 'react';

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            props: null
        }
    }

    render() {
        this.setState({
            props: this.props.properties,
        });
        let me = "Emanuel Sanga";
        return (
            <div>
                { this.state.props } {{ me }}
            </div>
        );
    }
}
