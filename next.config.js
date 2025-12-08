const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.placeholders.dev",
      },
    ],
  },
  turbopack: {},
  // webpack: (config, options) => {
  //   return config;
  // },
};

module.exports = withMDX(nextConfig);
