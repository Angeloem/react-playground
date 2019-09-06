import React, {Component} from 'react';
import Input from "./inputs";

export default class Form extends Component{
    componentDidMount() {
        console.log("component mounted")
    }

    render() {
        return (
            <div>
                <Input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    input_type={`text`}
                    placeholder={`inputs`}
                />
                <Input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    input_type={`textarea`}
                    placeholder={`inputs`}
                />
                <Input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    input_type={`button`}
                    value={`submit`}
                    placeholder={`inputs`}
                />
            </div>
        );
    }
}
