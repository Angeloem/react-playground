import React, {Component} from 'react';
import Input from "./inputs";

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name'
                    },
                    value: ''
                },
                source: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Source'
                    },
                    value: ''
                },
                Amount: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Amount'
                    },
                    value: ''
                },
                Options: {
                    elementType: 'select',
                    elementConfig: {
                        options:{}
                    },
                    value: ''
                },
            }
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    elementType='...'
                    elementConfig={`...`}
                    value={`...`}
                />
            </div>
        );
    }
}
