/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,OPTIONS,POST,PUT,DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Origin, X-Requested-With, Content-Type, Accept, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, token, User-Agent, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
