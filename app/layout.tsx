import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import {
  ClerkProvider,
  Show,
  SignIn,
} from "@clerk/nextjs"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <ClerkProvider>
            <Show when="signed-out">
              <div className="flex flex-col items-center justify-center h-screen w-full">
                <SignIn />
              </div>
            </Show>

            <Show when="signed-in">
              <Header />
              {children}
            </Show>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
