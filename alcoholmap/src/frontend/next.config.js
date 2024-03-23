module.exports = {
  async rewrites() {
    return [
      {
        source: '/users/signup',
        destination: 'http://api.greenbottle.site/users/signup',
      },
      {
        source: '/users/profile/:email',
        destination: 'http://api.greenbottle.site/users/profile/:userEmail',
      },
      {
        source: '/users/place/review',
        destination: 'http://api.greenbottle.site//users/place/review',
      },
      {
        source: '/users/profile',
        destination: 'http://api.greenbottle.site//users/profile',
      },
      {
        source: '/users/login',
        destination: 'http://api.greenbottle.site/users/login',
      },
      {
        source: '/place/review/:placeId',
        destination: 'http://api.greenbottle.site/place/review/:placeId',
      },
      {
        source: '/places/id',
        destination: 'http://api.greenbottle.site/place/review/:placeId',
      }
    ];
  },
};