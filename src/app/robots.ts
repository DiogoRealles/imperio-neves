import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemap = fetch('https://imperio-neves.vercel.app/sitemap.xml');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://imperio-neves.vercel.app/sitemap.xml',
  };
}
