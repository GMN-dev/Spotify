import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}
