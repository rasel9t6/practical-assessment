import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackProvider from '@/providers/TanstackProvider';
import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'my-recipes',
  description: 'Generated by create next app',
};

export default function RootLayout({ children}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position='top-center' />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
