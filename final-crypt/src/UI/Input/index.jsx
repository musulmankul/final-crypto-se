import React from 'react';
import '../Input/index.css'; 

function Input(props) {
    const {
        type = "text",     
        placeholder = "",    
        value,                 
        onChange,               
        disabled = false,      
        label = "",               
        danger = false            
    } = props;

    const className = `input-field ${danger ? "input-field--danger" : ""} ${disabled ? "input-field--disabled" : ""}`;
    const labelClassName = `input-label ${disabled ? "input-label--disabled" : ""} ${danger ? "input-label--danger" : ""}`;

    return (
        <div className="input-wrapper">
            {label && <label className={labelClassName}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={className}
            />
        </div>
    );
}

export default Input;
