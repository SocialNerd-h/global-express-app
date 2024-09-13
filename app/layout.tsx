import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Nav from './_ui/Navbar/Nav';
import Footer from './_ui/Footer';

const geistSans = localFont({
	src: './fonts/UbuntuRegular.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/UbuntuRegular.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Global Express',
	description: 'экпресс-доставка почты и грузов',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased flex flex-col justify-between`}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
