const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT_MODE === 'true' ? 'export' : undefined,
  trailingSlash: process.env.EXPORT_MODE === 'true',
  basePath: process.env.EXPORT_MODE === 'true' ? '/[your-repo-name]' : '',
  assetPrefix: process.env.EXPORT_MODE === 'true' ? '/[your-repo-name/' : '',
  env: {
    _next_intl_trailing_slash: 'never',
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    unoptimized: process.env.EXPORT_MODE === 'true',
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

module.exports = withNextIntl(nextConfig);
