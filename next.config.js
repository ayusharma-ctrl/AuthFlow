/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com']
    },
}

module.exports = {
    images: {
        domains: ['lh3.googleusercontent.com']
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
};
