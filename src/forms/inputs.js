import React from 'react';

const Input = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case ('text'):
            inputElement = <input
                                type={`text`}
                                {...props.elementConfig}
                                value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                                {...props.elementConfig}
                                value={props.value}/>;
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
