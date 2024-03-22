/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.slack-edge.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
