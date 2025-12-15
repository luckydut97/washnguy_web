import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

const serviceFocuses = [
  {
    title: "사내 운동 시설",
    description: "기업 헬스장 · 웰니스 시설 전용 세탁",
    image: "/type_img_1.png",
  },
  {
    title: "피트니스 센터",
    description: "피트니스 센터 특화 향·살균 케어",
    image: "/type_img_2.png",
  },
  {
    title: "스포츠 구단",
    description: "프로 구단 유니폼 · 장비 대량 세탁",
    image: "/type_img_3.png",
  },
  {
    title: "골프",
    description: "골프장 · 리조트 고급 타월 세탁",
    image: "/type_img_4.png",
  },
];

const clientLogos = [
  { src: "/company_logo_6.png", alt: "Company Logo 1" },
  { src: "/company_logo_2.png", alt: "Company Logo 2" },
  { src: "/company_logo_3.png", alt: "Company Logo 3" },
  { src: "/company_logo_4.png", alt: "Company Logo 4" },
  { src: "/company_logo_5.png", alt: "Company Logo 5" },
  { src: "/company_logo_1.png", alt: "Company Logo 6" },
  { src: "/company_logo_7.png", alt: "Company Logo 7" },
];

const yearsOfProcess = new Date().getFullYear() - 2013;

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] w-full overflow-hidden">
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
            <div className="mx-auto flex h-full w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 text-white md:px-8 lg:py-24">
              <p className="text-base font-bold uppercase tracking-[0.25em] text-white/90 md:text-lg">
                기업 전문 세탁 대행
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:max-w-5xl md:text-5xl">
                품질은 기본, 고객의 만족이 곧 세탁의 완성입니다.
                <br className="hidden md:block" />
                천천히 한걸음씩 정도를 지키겠습니다.
              </h1>
              <p className="mt-6 max-w-3xl text-xl font-medium text-slate-100/90 md:max-w-4xl">
                {yearsOfProcess}년간 다듬어온 대량 세탁 및 맞춤형 세탁에 최적화된 공정을 통해 고품질의 세탁 서비스를 제공합니다.
              </p>
              <p className="mt-2 max-w-3xl text-xl font-medium text-slate-100/90 md:max-w-4xl">
                환경 오염과 인체에 유해한 화학 제품을 일절 사용하지 않겠습니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/service"
                  className="rounded-full border-2 border-blue-600 bg-blue-600 px-9 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  서비스 살펴보기
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-white/70 px-9 py-3 text-center font-semibold text-white animate-bounce-slow transition hover:border-blue-200 hover:text-blue-100"
                >
                  상담 요청하기
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-10 pt-16 md:px-8">
        <FadeIn delay={50}>
          <section className="grid gap-5 text-center text-slate-900 md:grid-cols-4">
            {serviceFocuses.map((focus) => (
              <div
                key={focus.title}
                className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white px-4 py-6 shadow-sm"
              >
                <Image
                  src={focus.image}
                  alt={focus.title}
                  width={160}
                  height={160}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {focus.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{focus.description}</p>
                </div>
              </div>
            ))}
          </section>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                고객과의 약속
              </h2>
              <p className="mt-4 text-slate-600">
                천천히 한 걸음씩 정도를 지키며 기업 파트너와의 신뢰를 최우선으로
                합니다. 환경과 인체에 유해한 화학 제품을 배제하고 친환경 세제만을
                사용합니다.
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
                HS 크린텍 社 프리미엄 최신 세탁기 라인 '파로스(PHAROS) 50kg 모델'
                대용량 건조기를 보유 중이며, 자회사 ㈜내추럴크린 에서 365일 24시간 AS 및 기계를 공급받아 안정적인 세탁 서비스를 제공합니다.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-900">운영</dt>
                  <dd>월~토 주/야 교대</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">설비</dt>
                  <dd>세탁기 50~100kg, 건조기 50~80kg</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">물 공급</dt>
                  <dd>100% 수돗물, 50톤 처리</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">입고 차량</dt>
                  <dd>1톤 / 2.5톤 내장탑 차량</dd>
                </div>
              </dl>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
              PARTNERS
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              WASH & GUY 파트너사
            </h2>
            <p className="mt-3 text-slate-600">
              두산베어스, LG트윈스, NCSOFT, K2, 호반그룹 사내 피트니스 센터 등 다양한 기업 고객과 함께하며 맞춤 프리미엄 세탁 시스템을 운영합니다.
            </p>
            <div className="relative mt-8 overflow-hidden py-6">
              <div className="logo-marquee-track flex items-center gap-16">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={`${logo.src}-${index}`}
                    className="flex h-24 w-32 items-center justify-center opacity-80 transition hover:opacity-100"
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
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
