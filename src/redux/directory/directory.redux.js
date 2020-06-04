const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=brown-fedora-hat-in-selective-focus-photography-35185.jpg&fm=jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?cs=srgb&dl=assorted-cloth-lot-1336873.jpg&fm=jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?cs=srgb&dl=three-unpaired-multicolored-leather-sneakers-on-display-2300334.jpg&fm=jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?cs=srgb&dl=adult-beautiful-elegant-eyewear-291762.jpg&fm=jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?cs=srgb&dl=man-holding-jacket-1337477.jpg&fm=jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      default:
          return state;
  }
};

export default directoryReducer;