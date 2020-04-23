import React from 'react';

function Condition({isOn}) {
    return (
        <>
            <div>현재 리엑트가 {isOn ? "on" : "off"}</div>
        </>
    )
}

export default Condition;