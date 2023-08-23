import NavMenu from '@/components/NavMenu'
import { Inter } from 'next/font/google'
import './global.css'

export const metadata = {
  title: 'Bitfinanzas.com',
  description: 'Diario de finanzas y criptomonedas'
}

const inter = Inter({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavMenu />
        <div className='content-post'>
        {children}
        </div>
      </body>
    </html>
  )
}
