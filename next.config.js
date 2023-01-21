/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["images.unsplash.com","lh3.googleusercontent.com","firebasestorage.googleapis.com"]
  },
  eslint:{
    ignoreDuringBuilds:true
  }
}

module.exports = nextConfig
