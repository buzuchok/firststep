import React from 'react';
import './toggler.scss';


const Toggler = (props) => {
    return (
        <div className="toggler" onClick={props.clicked}>
            <i className="fa fa-bars"></i>
        </div>
    );
};

export default Toggler;