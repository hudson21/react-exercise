import React from 'react';

const Notifications = ({ alert, children }) => {
    return(
        <div className="container">
            {alert.type && (alert.type === 'alert-success' || alert.type === 'alert-danger') && 
            <div style={{marginTop: '40px'}}>
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            </div>}
            {children}
        </div>
        
    );
};

export default Notifications ;