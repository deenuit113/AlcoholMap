const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8080';
module.exports = {
  async rewrites() {
    return [
      {
        source: '/users/signup',
        destination: baseUrl + '/users/signup',
      },
      {
        source: '/users/profile/:email',
        destination: baseUrl + '/users/profile/:email',
      },
      {
        source: '/users/place/review',
        destination: baseUrl + '/users/place/review',
      },
      {
        source: '/users/profile',
        destination: baseUrl + '/users/profile',
      },
    ];
  },

  async onProxyReq(proxyReq) {
    // 프록시 요청 설정
    proxyReq.setHeader('Host', 'localhost:8080');
  },
};