import React from 'react'

const Scrollable = (props) => {
    return(
        <div style={{ overflowY: 'scroll', border: '1px solid black', height:'500px' }}>
            {props.children}
        </div>
    )
}

export default Scrollable;