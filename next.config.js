/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.upload.wikimedia.org'
    //   }
    // ],
    domains: ['upload.wikimedia.org']
  }
}

module.exports = nextConfig
