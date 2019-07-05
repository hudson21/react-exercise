import React from 'react';

const Notifications = ({ type, message, children }) => {
    return(
        <div className="container">
            {type && (type === 'alert-success' || type === 'alert-danger') && 
            <div style={{marginTop: '40px'}}>
                <div className={`alert ${type}`}>{message}</div>
            </div>}
            {children}
        </div>
        
    );
};

export default Notifications ;