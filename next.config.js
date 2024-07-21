/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['lidsql'],
        serverActions: true

    }
}

module.exports = nextConfig
