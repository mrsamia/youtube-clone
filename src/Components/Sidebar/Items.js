import React from 'react';

function Items(props) {
    return (
        <div>
            <div>
                <h4>{props.heading}</h4>
            </div>
        <div>
            <p>{props.items}</p>
        </div>
        </div>
    );
}

export default Items;