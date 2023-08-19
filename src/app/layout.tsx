import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { FC, ReactElement } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'DressEasy',
    description: 'An easy way to choose outfits',
}

const RootLayout: FC<{ children: ReactElement }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default RootLayout
