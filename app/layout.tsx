import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider"
import {Toaster} from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dropbox',
  description: 'Dropbox file sharing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <Header />
          {children}
          <Toaster />
        </body>
      </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
