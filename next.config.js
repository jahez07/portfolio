/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/experience',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/experience/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
