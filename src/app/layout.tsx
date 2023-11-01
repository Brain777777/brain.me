import '~/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import { TRPCReactProvider } from '~/trpc/react';
import { ThemeProvider } from '~/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Brain',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='h-full' suppressHydrationWarning>
        <body className={`font-sans ${inter.variable} h-full`}>
          <TRPCReactProvider headers={headers()}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              {children}
            </ThemeProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
