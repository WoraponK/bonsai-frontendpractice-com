import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          <main className="wrapper">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
