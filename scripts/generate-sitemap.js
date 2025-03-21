const fs = require('fs')
const path = require('path')

module.exports = function generateSitemap() {
	const siteUrl = 'https://most-studio.vercel.app/'

	const urls = [
		{ loc: `${siteUrl}/`, changefreq: 'daily', priority: 1.0 },
		{ loc: `${siteUrl}/#servicios`, changefreq: 'monthly', priority: 0.9 },
		{ loc: `${siteUrl}/#portafolio`, changefreq: 'monthly', priority: 0.8 },
		{ loc: `${siteUrl}/#precios`, changefreq: 'yearly', priority: 0.7 },
		{ loc: `${siteUrl}/#testimonios`, changefreq: 'yearly', priority: 0.5 },
		{ loc: `${siteUrl}/#nosotros`, changefreq: 'yearly', priority: 0.6 },
		{ loc: `${siteUrl}/#contacto`, changefreq: 'yearly', priority: 0.6 },
		// Agrega más secciones aquí
	]

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls
							.map(
								url => `
                <url>
                    <loc>${url.loc}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>${url.changefreq}</changefreq>
                    <priority>${url.priority}</priority>
                </url>
            `
							)
							.join('')}
        </urlset>
    `

	const sitemapPath = path.join(__dirname, '../public/sitemap.xml')
	fs.writeFileSync(sitemapPath, sitemap.trim())
	console.log('Sitemap generado en:', sitemapPath)
}
