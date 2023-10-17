import './globals.css'

import { Providers } from './globalRedux/provider';
import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

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
      <body >
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
