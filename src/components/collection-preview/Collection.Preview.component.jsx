import React from 'react';

import CollectionItem from '../../components/collection-items/collection-item';

import './CollectionPreview-styles.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((items, idx) => idx < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>

)

export default CollectionPreview;