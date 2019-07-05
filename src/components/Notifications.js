import React from 'react';

const Notifiactions = ({ type, message }) => {
    return(
        <div style={{marginTop: '40px'}}>
            <div className={`alert ${type}`}>{message}</div>
        </div>
    );
};

export default Notifiactions;