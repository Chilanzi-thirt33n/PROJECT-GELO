import type { Metadata } from "next";
import Footer from "@/components/common/footer";
import NavLinks from "@/components/common/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { ScrollMeter } from "@/components/common/scroll";
import Services from "@/components/common/service";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-poppins", // custom CSS variable name
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gelos Treat — Pastry Supplies & Baking Utensils in Lusaka",
  description:
    "Gelos Treat is your one-stop shop in Lusaka for quality baking tools, pastry supplies, and cake accessories. Serving both home bakers and professionals across Zambia.",
  keywords: [
    "baking tools Zambia",
    "pastry shop Lusaka",
    "cake decorating supplies Zambia",
    "baking utensils Kitwe",
    "Lusaka baking store",
    "cupcake tools Zambia",
    "Gelos Treat",
    "baking supplies Zambia",
    "cake tools Lusaka",
    "kitchen accessories Zambia",
    "pastry decorating tools",
    "baking shop Lusaka",
    "Zambian baking gear",
  ],
  authors: [{ name: "Gelos Treat Team", url: "https://gelostreats.com" }],
  generator: "Next.js",
  applicationName: "Gelos Treat",
  metadataBase: new URL("https://gelostreats.com"),
  openGraph: {
    title: "Gelos Treat — Pastry Supplies & Baking Utensils in Lusaka",
    description:
      "Gelos Treat is your trusted source for baking utensils, cake tools, and decorating supplies in Zambia. Perfect for home bakers, bakeries, and baking startups.",
    url: "https://gelostreats.com",
    siteName: "Gelos Treat",
    images: [
      {
        url: "https://gelostreats.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gelos Treat shop and tools preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gelostreats",
    title: "Gelos Treat — Pastry Supplies & Baking Utensils in Lusaka",
    description:
      "Find quality baking and cake decorating tools at Gelos Treat, Lusaka’s go-to pastry shop for all baking lovers and professionals.",
    images: ["https://gelostreats.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const linksData = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#About" },
  { label: "Catalog", href: "/products" },
  { label: "Recipes", href: "/blogs" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavLinks links={linksData} logoSrc="/logo.svg" />
      <ScrollMeter />
      <body
        className={`${poppins.variable} antialiased bg-muted overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
      <Services />
      <Footer />
    </html>
  );
}
