import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

    images: {
        unoptimized: true, // Disables image optimization for static export
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });
        return config;
    },
};

export default nextConfig;
