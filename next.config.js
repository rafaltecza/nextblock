/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    optimizeFonts: false,
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;


