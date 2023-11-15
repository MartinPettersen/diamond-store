import './globals.css'

import { Providers } from './globalRedux/provider';
import type { Metadata } from 'next';
import Header from "@/components/header/Header";
import Footer from '@/components/footer/Footer';
import { Cinzel_Decorative } from '@next/font/google'

const cinzel_Decorative = Cinzel_Decorative({
  subsets: ["latin"], weight: "400"
});

// Cinzel Decorative
export const metadata: Metadata = {
  title: 'Din Gullsmed',
  description: 'Portfolio side',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cinzel_Decorative.className}>
        <Providers>

        <main>
        <Header />

        {children}
        </main>

        <Footer />
        </Providers>
        
        </body>
    </html>
  )
}
