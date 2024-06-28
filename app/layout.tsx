import "@/styles/global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header-component"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer-component"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sebastian Fermanelli - Backend Development Engineer",
  description: "My skills in software engineering and how to reach me out.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full w-full relative antialiased">
            <div className="flex flex-col gap-3 py-3 h-screen container mx-auto max-w-screen-md relative z-10">
              <Header />
              <main className="flex-grow flex flex-col justify-center self-center">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
