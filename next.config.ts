import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true,
  },typescript:{
    ignoreBuildErrors: true,
  }, 
  images: {
    domains: ['aceternity.com','images.unsplash.com','assets.aceternity.com'], // Tambahkan domain eksternal yang ingin digunakan
  },
};



export default nextConfig;
