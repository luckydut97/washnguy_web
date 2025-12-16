import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LanguageToggle from "./components/LanguageToggle";
import Link from "next/link";
import DesktopNav from "./components/DesktopNav";
import Image from "next/image";

const pretendard = localFont({
  src: "./static/fonts/PretendardVariable.woff2",
  weight: "45 920",
  display: "swap",
  variable: "--font-pretendard",
});

const navLinks = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/service" },
  { label: "거래처", href: "/clients" },
  { label: "고객센터", href: "/contact" },
];

export const metadata: Metadata = {
  title: "워시앤가이 | 기업 전문 세탁 대행",
  description:
    "향기 나는 탁월한 세탁을 제공하는 기업 전문 세탁 대행사 워시앤가이의 공식 홈페이지입니다.",
  openGraph: {
    title: "워시앤가이 | 기업 전문 세탁 대행",
    description:
      "향기 나는 탁월한 세탁을 제공하는 기업 전문 세탁 대행사 워시앤가이의 공식 홈페이지입니다.",
    images: [
      {
        url: "/home_background_img.png",
        width: 1200,
        height: 630,
        alt: "워시앤가이 메인 배너",
      },
    ],
  },
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
              <div className="flex flex-1 items-center gap-3">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/washnguy_logo.png"
                    alt="Wash & Guy Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                    priority
                  />
                  <span className="text-lg font-semibold tracking-tight">WASH & GUY</span>
                </Link>
              </div>
              <nav className="hidden flex-1 md:flex">
                <DesktopNav links={navLinks} />
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
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:px-8">
              <div className="flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:flex-wrap md:items-center md:gap-x-4 md:gap-y-1">
                <span>워시앤가이</span>
                <span>전화 : 010-4084-4356 (상담시간 24시간)</span>
                <span>경기도 하남시 덕풍동 250-1 1층</span>
                <span>대표이사 : 이원상</span>
                <span>개인정보책임자 : 이원상</span>
                <span>사업자등록번호 : 105-45-14703</span>
              </div>
              <div className="flex flex-col gap-1 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
                <p>기업 전문 세탁 대행 | 친환경 프리미엄 케어</p>
                <p>© {new Date().getFullYear()} WASHNGUY. All Rights Reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
