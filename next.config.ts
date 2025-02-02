import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	output: "export",
	basePath: "/cv"
};
 
export default withNextIntl(nextConfig);