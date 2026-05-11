import type { Metadata } from "next";
import { Navbar } from "../../components/navbar/navbar";
import { hasLocale } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { Footer } from "@/src/components/footer/footer";
import { Provider } from "@/src/components/provider/provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quartic-code.com"),

  title: {
    default: "QuarticCode | Modern Web Development Agency",
    template: "%s | QuarticCode",
  },

  description:
    "QuarticCode is a modern software development agency focused on scalable web applications, mobile apps, cloud infrastructure, and high-performance digital solutions.",

  keywords: [
    "web development",
    "next.js agency",
    "software development",
    "react development",
    "mobile app development",
    "cloud infrastructure",
    "custom web applications",
    "UI UX design",
    "typescript development",
    "quarticcode",
  ],

  authors: [{ name: "QuarticCode" }],
  creator: "QuarticCode",

  openGraph: {
    title: "QuarticCode | Modern Web Development Agency",
    description:
      "Scalable web applications, modern mobile apps, cloud solutions, and high-performance digital products.",
    url: "https://quartic-code.com",
    siteName: "QuarticCode",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 dark:bg-black`}
        suppressHydrationWarning
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
