import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn, getSiteMetadata } from '@/lib/utils'
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = getSiteMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )
      }>
        <div vaul-drawer-wrapper="">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}
