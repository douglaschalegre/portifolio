import './globals.css';
import Navbar from '@/components/templates/navbar';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
