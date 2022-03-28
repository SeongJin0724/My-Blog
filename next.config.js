/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  NETLIFY_NEXT_PLUGIN_SKIP: true,
  env: {
    SANITY_PROJECT_ID: 'dyzj8m5g',
  }
}

module.exports = nextConfig
