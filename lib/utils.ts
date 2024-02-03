import { siteConfig } from "@/config/site"
import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSiteMetadata = () => {
  return {
    title: {
      default: siteConfig.name,
      template: '%s | ' + siteConfig.name,
    },
    metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.authors[0].name,
    ogImage: siteConfig.ogImage, 
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.siteUrl,
      site_name: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.siteUrl}/site.webmanifest`,
  } as Metadata
}

