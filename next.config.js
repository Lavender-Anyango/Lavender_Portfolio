/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: 'https://davidalimazo.vercel.app',
        MONGODB_URL: 'mongodb+srv://admin:letMeIn224@ts-mongo.rz4fvgg.mongodb.net/?retryWrites=true&w=majority'
    }
};

module.exports = nextConfig;
