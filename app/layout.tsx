import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mellow｜大人女性のためのオンライン・パーソナルスタイリング",
  description:
    "「今日の私、ちょっと好きかも。」を、もう一度。大人女性のためのオンライン・パーソナルスタイリング mellow のポートフォリオデモLPです。",
  alternates: {
    canonical: "https://example.com/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "mellow｜大人女性のためのオンライン・パーソナルスタイリング",
    description:
      "「今日の私、ちょっと好きかも。」を、もう一度。大人女性のためのオンライン・パーソナルスタイリング mellow のポートフォリオデモLPです。",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "mellow｜大人女性のためのオンライン・パーソナルスタイリング",
    description:
      "「今日の私、ちょっと好きかも。」を、もう一度。大人女性のためのオンライン・パーソナルスタイリング mellow のポートフォリオデモLPです。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
