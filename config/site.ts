import { siteKeywords } from "./site-keywork";

export const siteConfig = {
    name: 'Carboit',
    description: 'Free, open-source Next.js template with Shadcn and Tailwind for swift and modern web development.',
    siteUrl: process.env.WEB_SITE_URL || 'http://localhost:3000',
    ogImage: `${process.env.WEB_SITE_URL}/og-image.png`, // Add your own image in the /public folder
    socialNetworks: { // Add your own social networks
        facebook: 'https://facebook.com/my-site',
        instagram: 'https://instagram.com/my-site',
        twitter: 'https://twitter.com/my-site',
        youtube: 'https://youtube.com/my-site',
    },
    keywords: siteKeywords, // Defined in config/site-keywords.ts
    authors: [ // Add your own authors
        {
            name: 'DevLach',
            url: 'https://devlach.com',
        }
    ]
};

export type SiteConfig = typeof siteConfig;