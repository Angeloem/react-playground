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
        const formFromStateArray = [];
        for (let key in this.state.displayForm) {
            formFromStateArray.push({
                id: key,
                config: this.state.displayForm[key]
            });
        }
        return (
            <div>
                {
                    formFromStateArray.map(formElement => (
                        <Input
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                        />
                    ))
                }
            </div>
        );
    }
}
