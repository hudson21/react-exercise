import React, { Fragment } from 'react';

const Notifiactions = ({ type, message, children }) => {
    return(
        <Fragment>
            {(type === 'alert-success' || type === 'alert-danger') && 
        <div style={{marginTop: '40px'}}>
            <div className={`alert ${type}`}>{message}</div>
        </div>}
            {children}
        </Fragment>
        
    );
};

export default Notifiactions ;