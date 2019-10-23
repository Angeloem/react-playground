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

    formValueChanged = (event, keyIdentifier) => {
        const updatedForm = {
            ...this.state.displayForm
        };
        const updatedFormElements = {
            ...updatedForm[keyIdentifier]
        };
        updatedFormElements.value = event.target.value;
        updatedForm[keyIdentifier]=updatedFormElements;
        this.setState({
            displayForm: updatedFormElements
        });
    };

    submit = (event) => {
        event.preventDefault();
        const formData = {};
        for (let key in this.state.displayForm) {
            formData[key] = this.state.displayForm[key].value;
        }
        console.log(formData)
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
            <form onSubmit={this.submit}>
                {
                    formFromStateArray.map(formElement => (
                        <Input
                            class={'pa3 ba b--green bg-lightest-blue'}
                            changed={(event) => this.formValueChanged(event, formElement.id)}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                        />
                    ))
                }
            </form>
        );
    }
}
