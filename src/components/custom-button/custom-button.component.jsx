import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, ...otherprops}) => (
    <div className='custom-button' {...otherprops}>
        {children}
    </div>
);

export default CustomButton;