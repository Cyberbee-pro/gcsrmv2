/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/applyod',
                destination: "http://10.1.105.62/srmleaveapp",
                permanent: true,
            }
        ];
    }
};

export default nextConfig;
