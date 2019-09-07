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
                        options:[
                            {value:'Value1', displayValue: 'First'},
                            {value:'Value2', displayValue: 'Second'},
                            {value:'Value3', displayValue: 'Third'},
                            {value:'Value4', displayValue: 'Fourth'},
                        ],
                    },
                    value: 'Select Form'
                },
            }
        }
    }

    componentDidMount() {
    }

    formValueChanged(event) {
        let target = event.target;
        console.log(target.value)
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
                            changed={this.formValueChanged}
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
