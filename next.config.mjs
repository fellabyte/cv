import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/cv",
	output: "export",
	reactStrictMode: true,
	i18n: {
		locales: ["ar", "en"],
		defaultLocale: "en",
	}
};
 
export default withNextIntl(nextConfig);