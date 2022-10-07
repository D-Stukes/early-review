import React from 'react';

const Child = (props) => {
    return (
        <div>
            
            <p>{props.first} {props.last}</p>
        </div>
    );
};

export default Child;