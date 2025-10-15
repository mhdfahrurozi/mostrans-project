import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloProviderWrapper from "@/components/ApolloProvider";  
import { LocationProvider } from "@/context/Location"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mostrans Project",
  description: "Character management using React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocationProvider> 
          <ApolloProviderWrapper>
            {children} 
          </ApolloProviderWrapper>
        </LocationProvider>
      </body>
    </html>
  );
}
