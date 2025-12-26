import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import { getPartners } from "@/lib/notion";
import { defaultPartners } from "@/lib/defaultPartners";

const serviceFocuses = [
  {
    titleEnglish: "SPORTS TEAM",
    title: "스포츠 구단",
    description: "각 구단 유니폼·타월류 대량 세탁",
    image: "/type_img_1.png",
  },
  {
    titleEnglish: "FITNESS",
    title: "스포츠 체육시설",
    description: "피트니스 센터 타월·운동복·유니폼 대량 세탁",
    image: "/type_img_2.png",
  },
  {
    titleEnglish: "GOLF",
    title: "골프 & 리조트",
    description: "타월·유니폼·정장류 대량 세탁",
    image: "/type_img_3.png",
  },
  {
    titleEnglish: "F&B",
    title: "F&B 세탁",
    description: "냅킨·앞치마·주방복 대량 세탁",
    image: "/type_img_4.png",
  },
  {
    titleEnglish: "ALL",
    title: "기타 모든 의류",
    description: "정장·린넨 등 모든 린넨 세탁",
    image: "/type_img_5.png",
  },
];

const yearsOfProcess = new Date().getFullYear() - 2013;

export default async function Home() {
  const notionPartners = await getPartners();
  const notionLogos = notionPartners
    .filter((partner) => Boolean(partner.logo))
    .map((partner, index) => ({
      src: partner.logo as string,
      alt: partner.name || `파트너 ${index + 1}`,
    }));

  const clientLogos =
    notionLogos.length > 0
      ? notionLogos
      : defaultPartners.map((partner) => ({
          src: partner.logo,
          alt: partner.name,
        }));

  return (
    <div className="w-full">
      <section className="hero-section relative w-full overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/home_background_img.png)" }} />
          <div className="absolute inset-0 bg-slate-900/40" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full flex-col">
          <FadeIn>
            <div className="mx-auto flex h-full w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 text-white md:px-12 lg:py-24">
              <p className="text-base font-bold uppercase tracking-[0.25em] text-white/90 md:text-lg">
                기업 및 호텔 대량세탁 전문
              </p>
              <h1 className="mt-6 max-w-5xl text-[34px] font-semibold leading-tight md:text-[46px]">
                품질은 기본, 고객의 만족이 곧 세탁의 완성입니다.
                <br className="hidden md:block" />
                신뢰를 바탕으로 끊임없이 노력하는 워시앤가이 입니다.
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-medium text-slate-100/90 md:max-w-4xl">
                {yearsOfProcess}년간 다듬어온 대량 세탁 최적화 공정을 통해 프리미엄 세탁 서비스를 제공합니다.
              </p>
              <p className="mt-2 max-w-3xl text-xl font-medium text-slate-100/90 md:max-w-4xl">
                환경 오염과 인체에 유해한 화학 제품을 일절 사용하지 않습니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/service"
                  className="rounded-full border-2 border-blue-600 bg-blue-600 px-9 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
                >
                  서비스 살펴보기
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-white/70 px-9 py-3 text-center font-semibold text-white animate-bounce-slow transition hover:border-blue-200 hover:text-blue-100"
                >
                  무료 견적 문의
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-12 md:px-8">
        <FadeIn delay={50}>
          <section className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              PARTNERS
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              WASH & GUY 파트너사
            </h2>
          </section>
        </FadeIn>

        <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden py-4">
          <div className="logo-marquee-track flex items-center gap-16 px-4">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex h-24 w-32 items-center justify-center opacity-90 transition hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={100}
                  className="h-auto w-full object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <FadeIn delay={100}>
          <section className="space-y-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                BUSINESS
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                핵심 업종
              </h2>
              <p className="mt-3 text-slate-600">
                워시앤가이는 다양한 업종에 최적화된 세탁 솔루션을 제공합니다.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {serviceFocuses.map((focus) => (
                <div
                  key={focus.title}
                  className="group relative h-full overflow-hidden rounded-3xl shadow-lg"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={focus.image}
                      alt={focus.title}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                        {focus.titleEnglish}
                      </p>
                      <p className="mt-2 text-xl font-semibold">{focus.title}</p>
                      <p className="mt-1 text-sm text-white/80">
                        {focus.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={150}>
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                고객과의 약속
              </h2>
              <p className="mt-4 text-slate-600">
                환경과 인체에 유해한 화학 제품을 배제하고 친환경 세제만을
                사용합니다. 천천히 한걸음씩 정도를 지키겠습니다.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>· 맞춤 세탁 시간 배정으로 익일 납품</li>
                <li>· 세탁 품질과 향기를 유지하는 전 과정 관리</li>
                <li>· 거래처 특성에 맞춘 세심한 대응</li>
                <li>· 눈앞의 이익보다 장기 신뢰를 추구</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                대량 세탁 특화 인프라
              </h2>
              <p className="mt-4 text-slate-600">
                HS 크린텍 社 프리미엄 최신 세탁기 라인 파로스(PHAROS) 모델
                최신 대형 세탁기 및 건조기를 보유 중이며, 자회사 ㈜내추럴크린 에서 365일 24시간 AS 및 기계를 공급받아 안정적인 세탁 서비스를 제공합니다.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600 items-center content-center">
                <div>
                  <dt className="font-semibold text-slate-900">운영</dt>
                  <dd>월~토 주/야 교대</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">입고 차량</dt>
                  <dd>1톤 / 2.5톤 내장탑 차량</dd>
                </div>
              </dl>
            </div>
          </section>
        </FadeIn>

      </div>
    </div>
  );
}
