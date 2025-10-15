"use client";

import PillNavbar from '@/components/header';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { TransitionProvider } from '@/context/TransitionContext';
import PageTransition from '@/components/PageTransition';

// The root layout is now a client component to support the transition context.
// Metadata should be handled in individual page.tsx or a template.tsx file.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
            <PageTransition />
            <CustomCursor />
            {/* The navbar and main content are direct children of the provider */}
            <PillNavbar />
            <main>{children}</main>
        </TransitionProvider>
      </body>
    </html>
  );
}
