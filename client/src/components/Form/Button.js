import React from 'react';

export const Button = props =>
    <button {...props} className="btn btn-primary">
        {props.children}
    </button>;