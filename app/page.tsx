// In app/layout.js
import PillNavbar from '@/components/header'; // Adjust the path if needed
import './globals.css';

export const metadata = {
  title: 'TACET',
  description: 'My awesome new website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PillNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}