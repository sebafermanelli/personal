import '@/styles/globals.css';
import Nav from '@/components/Nav';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sebastian Fermanelli',
	description: 'Sebastian Fermanelli Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="main">
					<div className="gradient"></div>
				</div>
				<main className="app">
					<Nav />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
