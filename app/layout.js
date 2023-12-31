import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from './Providers'


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'AuthFlow',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
