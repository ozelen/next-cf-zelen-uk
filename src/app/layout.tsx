import './globals.css'
import type { Metadata } from 'next'
import Navbar from './common/Navbar';
import Analytics from './common/Analytics';

export const metadata: Metadata = {
  title: 'Oleksiy Zelenyuk',
  description: 'Oleksiy Zelenyuk\'s personal website',
  icons: '/favicon.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className='h-full bg-black text-zinc-200'>
        <div className="ui-hero theme-dark-gray">
          <Navbar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
