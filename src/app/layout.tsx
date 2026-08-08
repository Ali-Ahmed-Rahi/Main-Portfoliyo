import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../index.css';
import Sidebar from '@/Dual/Sidebar';
import ResponsiveSb from '@/Dual/ResponsiveSb';
import ResponsiveContact from '@/Dual/ResponsiveContact';

export const metadata: Metadata = {
  title: 'Ali Ahmed Rahi | Portfolio',
  description: 'Full Stack Web Developer portfolio built with Next.js and TypeScript.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <section className="bg-black backdrop:blur-lg">
          <div className="max-w-7xl mx-auto md:flex shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
            <div className="bg-black md:h-screen md:fixed md:top-0 hidden md:block border-l md:border-yellow-600">
              <Sidebar />
            </div>
            <div className="md:hidden block">
              <ResponsiveSb />
            </div>
            <div className="bg-black md:ml-[282px] overflow-y-auto md:px-10 px-2 mb-[70px] md:mb-0 min-h-screen text-white">
              {children}
            </div>
            <div className="md:hidden block">
              <ResponsiveContact />
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
