import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import LanguageToggle from "./components/LanguageToggle";

const pretendard = localFont({
  src: "./static/fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

const navLinks = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/service" },
  { label: "거래처", href: "/clients" },
  { label: "문의", href: "/contact" },
];

export const metadata: Metadata = {
  title: "워시앤가이 | 기업 전문 세탁 대행",
  description:
    "향기 나는 탁월한 세탁을 제공하는 기업 전문 세탁 대행사 워시앤가이의 공식 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center px-4 py-4 md:px-8">
              <div className="flex flex-1">
                <Link href="/" className="text-lg font-semibold tracking-tight">
                  WASH & GUY
                </Link>
              </div>
              <nav className="hidden flex-1 justify-center gap-16 text-base font-semibold tracking-wide md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap transition hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden flex-1 justify-end md:flex">
                <LanguageToggle />
              </div>
            </div>
            <div className="px-4 pb-4 md:hidden">
              <nav className="flex flex-wrap gap-3 text-sm font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-blue-500 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1 w-full">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between md:px-8">
              <p>© {new Date().getFullYear()} WASHNGUY. All Rights Reserved.</p>
              <p>기업 전문 세탁 대행 | 친환경 프리미엄 케어</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
