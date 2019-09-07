import React from 'react';

const Input = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case ('input'):
            inputElement = <input
                                onChange={props.changed}
                                type={`text`}
                                {...props.elementConfig}
                                value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                                onChange={props.changed}
                                {...props.elementConfig}
                                value={props.value}/>;
            break;
        case ('select'):
            inputElement = (
                            <select
                                    onChange={props.changed}
                                    value={props.value}>
                                    {props.elementConfig.options.map(option => (
                                        <option value={option.value}>
                                            {option.displayValue}
                                        </option>
                                    ))}
                            </select>);
            break;
        default:
            inputElement = "no form specified!!"
    }
    return (
        <div>
            { inputElement }
        </div>
    );
};

export default Input;
