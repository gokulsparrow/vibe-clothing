import React from 'react';

import "./menuitemstyles.scss";

const Menuitem = ({title}) => (
    <div>
        <div className='menu-items'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop now</span>
            </div>
        </div>
    </div>
);

export default Menuitem;