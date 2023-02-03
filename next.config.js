/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts:true,
  images:{
    remotePatterns:[
      {
      protocol:'https',
      hostname:'animeblkom.net',

      
      },
      {
        protocol:'https',
        hostname:'cdn.myanimelist.net',
  
        },
    ],
    minimumCacheTTL:1500000,

  },

}
 

module.exports = {
  reactStrictMode:true,
  experimental:{
    forceSwcTransforms: true,
  }
}
