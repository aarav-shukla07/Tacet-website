// app/layout.tsx

import PillNavbar from '@/components/header'; // Corrected path
import './globals.css';

export const metadata = {
  title: 'TACET',
  description: 'My awesome new website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Add 'relative' to make positioning the animation easier */}
      <body className="relative">
        <PillNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}