import { fonts } from '@/libs/fonts';
import { ChakraProvider } from '@/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
