import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanitized AI Product Showcase',
  description:
    'A public-safe portfolio cut of a commercial AI product, focused on product execution, workflow orchestration, and eval design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
