/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (isServer) {
			const generateSitemap = require('./scripts/generate-sitemap')
			generateSitemap()
		}
		return config
	},
}

module.exports = nextConfig
