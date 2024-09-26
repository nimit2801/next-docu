/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  rewrites: async () => {
    return [
      {
        source: "/docs/:path*",
        destination: "/docs/:path*/index.html",
      },
      {
        source: "/blog/:path*",
        destination: "/blog/:path*/index.html",
      },
    ];
  },
};

export default nextConfig;
