import * as fs from 'fs';
import { GetServerSideProps } from 'next';
const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'http://localhost:3000';

  const staticPaths = fs
    .readdirSync('pages')
    .filter(staticPage => {
      return ![
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'loading.tsx',
        '404.tx',
        'sitemap.xml.js',
      ].includes(staticPage);
    })
    .map(staticPagePath => {
      return `${BASE_URL}/${staticPagePath}`;
    });

  const allPaths = [...staticPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map(url => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
