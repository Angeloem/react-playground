import React from 'react';

const Input = (props) => {
    let inputElement = null;
    switch(props.input_type) {
        case ('text'):
            inputElement = <input type={`text`} {...props}/>;
            break;
        case ('textarea'):
            inputElement = <textarea {...props}/>;
            break;
        case ('button'):
            inputElement = <input type={`button`} {...props}/>;
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
