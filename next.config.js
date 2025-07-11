
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  // fallbacks: {
  //     document: "/~offline"      // Optional: In case you want to fallback to a custom page for offline
  // }
});

const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //     protocol: "https",
      //     hostname: "www.sellmycartoday.uk",
      //     pathname: "/smc/wp-content/uploads/**",
      // },
    ],
  },
};

module.exports = withPWA(nextConfig);