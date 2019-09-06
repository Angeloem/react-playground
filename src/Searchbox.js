import React from 'react';
import Form from "./forms/forms";

const Searchbox = ({searchfile , searchChange}) => {
    return(
        <div className={'pa2'}>
            <input
                className={'pa3 ba b--green bg-lightest-blue'}
                type={'search'}
                placeholder={'search bots'}
                onChange={searchChange}
            />
            <Form properties={`This is me`} />
        </div>
    );
}

export default Searchbox;
