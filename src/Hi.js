import React from 'react';

function Hi(props) {
    const {name, firend, one} = props;
    return (
        <>
            <h1>Hi!!{name}</h1>
            <h2>내 {firend}</h2>
            <h2>내 {one}</h2>
        </>
    )
}

export default Hi;