import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
	reactStrictMode: false,
	trailingSlash: true,
	assetPrefix: isProd ? "/cv" : "",
	basePath: isProd ? "/cv" : "",
	output: "export",
};
 
export default withNextIntl(nextConfig);