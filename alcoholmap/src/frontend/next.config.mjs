/** @type {import('next').NextConfig} */
const nextConfig = {};

const baseUrl = "http://localhost:8080";

export default {
    ...nextConfig,
    async rewrites(){
        return [
            {
                source: '/users/signup',
                destination: baseUrl + '/users/signup',
            },
        ];
    },
};
