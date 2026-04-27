import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { GA_ID } from '@/lib/gtag'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pro Max Tv Player | Android TV Box 4K Édition 2026',
  description: 'Pro Max TV Player — Android TV Box 4K Édition 2026. Processeur Quad-Core, 2 Go RAM, 16 Go ROM. Commandez votre ProMaxTV dès maintenant.',
  keywords: 'pro max tv player, promaxtv, pro max tv, pro max player, android tv box, tv box android, 4k tv box, streaming tv box maroc',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Pro Max Tv Player | Android TV Box 4K',
    description: 'Transformez votre TV en centre de divertissement 4K avec le Pro Max TV Player. Commandez via WhatsApp.',
    images: ['/Promaxtvbox.PNG'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}