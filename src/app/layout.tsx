import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio | 3 Years Experience",
  description: "Professional full-stack developer with 3 years of experience. Specializing in modern web technologies, responsive design, and scalable applications.",
  keywords: "full-stack developer, web developer, react, nextjs, typescript, portfolio",
  authors: [{ name: "Full Stack Developer" }],
  openGraph: {
    title: "Full Stack Developer Portfolio",
    description: "Professional full-stack developer with 3 years of experience",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}