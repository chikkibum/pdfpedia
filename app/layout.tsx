import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>pdfpedia</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta
          property="og:title"
          content="pdfpedia"
        />
        <meta
          property="og:description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="pdfpedia"
        />
        <meta
          name="twitter:description"
          content="Upload a PDF, then ask questions about it - without a single remote request!"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col md:p-2 h-screen overflow-scroll">{children}</div>
      </body>
    </html>
  );
}
