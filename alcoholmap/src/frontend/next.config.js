module.exports = {
  async rewrites() {
    return [
      {
        source: '/users/signup',
        destination: `http://localhost:8080/users/signup`,
      },
      {
        source: '/users/profile/:email',
        destination: `http://localhost:8080/users/profile/:userEmail`,
      },
      {
        source: '/users/place/review',
        destination: `http://localhost:8080//users/place/review`,
      },
      {
        source: '/users/profile',
        destination: `http://localhost:8080//users/profile`,
      },
      {
        source: '/users/login',
        destination: `http://localhost:8080/users/login`,
      }
    ];
  },
};