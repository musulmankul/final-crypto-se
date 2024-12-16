import React from 'react';
import '../Heading/index.css'; 

function Heading(props){
    const { level = 1, children } = props;
    const className = `heading--${level}`;

    
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Heading;
