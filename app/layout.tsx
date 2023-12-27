import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FileUpload bug reproduction',
  description: 'Form submitted not have the file selected',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col justify-center items-center w-80 mt-4 mx-auto mb-10">
					<PrimeReactProvider>{children}</PrimeReactProvider>
				</div>
			</body>
		</html>
	);
}
