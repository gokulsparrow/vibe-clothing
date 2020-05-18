import React from 'react';
import Menuitem from '../menu-item/menu-item';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [{
              title: 'hats',
              imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=brown-fedora-hat-in-selective-focus-photography-35185.jpg&fm=jpg',
              id: 1,
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?cs=srgb&dl=assorted-cloth-lot-1336873.jpg&fm=jpg',
              id: 2,
              linkUrl: '/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?cs=srgb&dl=three-unpaired-multicolored-leather-sneakers-on-display-2300334.jpg&fm=jpg',
              id: 3,
              linkUrl: '/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?cs=srgb&dl=adult-beautiful-elegant-eyewear-291762.jpg&fm=jpg',
              size: 'large',
              id: 4,
              linkUrl: ' /womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?cs=srgb&dl=man-holding-jacket-1337477.jpg&fm=jpg',
              size: 'large',
              id: 5,
              linkUrl: '/mens'
            }]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <Menuitem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
} 

export default Directory;