import "@/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header-component";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sebastian Fermanelli - Software Engineer",
    description: "Sebastian Fermanelli's Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="flex flex-col h-screen">
                        <Header />
                        <main className="container mx-auto px-3 max-w-screen-lg flex-grow">{children}</main>
                        <Footer />
                        <Toaster />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
