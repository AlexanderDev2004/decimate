import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/shared/navigation/header";
import Footer from "@/shared/navigation/footer";
import "./globals.css";

const fonts = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  icons: "",
  metadataBase: new URL("https://decimate.vercel.app/"),
  openGraph: { images: "" },
  twitter: { card: "summary_large_image", images: "" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-py-10 ${fonts.variable} max-[8192px]:opacity-0 max-[3120px]:m-0 max-[3120px]:box-border max-[3120px]:p-0 max-[3120px]:[font-family:'Plus_Jakarta_Sans',Times,sans-serif,serif] max-[3120px]:opacity-100 max-[324px]:hidden`}>
      <body className="flex h-full min-h-screen flex-col overflow-x-hidden">
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}