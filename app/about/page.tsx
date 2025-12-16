import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

const promises = [
  {
    text: "기업과의 약속을 지키며 정도를 걷습니다.",
    icon: "/promise_img.svg",
    alt: "약속 아이콘",
    iconClass: "bg-slate-900/10 text-slate-900",
  },
  {
    text: "환경오염과 유해 화학제품을 배제하고 친환경 세제만 사용합니다.",
    icon: "/env_img.svg",
    alt: "친환경 아이콘",
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    text: "맞춤 세탁 시스템으로 거래처의 작은 요구에도 귀 기울입니다.",
    icon: "/machine_img.svg",
    alt: "맞춤 시스템 아이콘",
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    text: "단기 이익보다 장기적인 신뢰와 감동을 추구합니다.",
    icon: "/profit_img.svg",
    alt: "신뢰 아이콘",
    iconClass: "bg-gradient-to-r from-amber-200 to-yellow-200 text-amber-700",
  },
];

const milestones = [
  {
    year: "2013",
    detail: "㈜내추럴크린 세탁기계 사업부 및 세탁 사업부 법인 설립",
  },
  {
    year: "2013",
    detail: "세탁기계 회수기 설치 부문 전국 1위 달성",
  },
  {
    year: "2016",
    detail: "세탁 사업부 시설 확장 (200평 규모)",
  },
  {
    year: "2019",
    detail: "세탁 사업부 법인 분리, 워시앤가이 90평 규모 독자 설립",
  },
];

const serviceFocuses = [
  {
    titleEnglish: "HEALTH",
    title: "기업 사내 휘트니스",
    description: "사내 헬스장·웰니스 시설 대량 세탁",
    image: "/type_img_1.png",
  },
  {
    titleEnglish: "FITNESS",
    title: "스포츠 체육시설",
    description: "피트니스 센터 특화 향·살균 공정",
    image: "/type_img_2.png",
  },
  {
    titleEnglish: "SPORTS TEAM",
    title: "프로 구단",
    description: "각 구단 유니폼·장비 대량 세탁",
    image: "/type_img_3.png",
  },
  {
    titleEnglish: "GOLF",
    title: "고급 골프 & 리조트",
    description: "클럽하우스·코스 운영 타월 세탁",
    image: "/type_img_4.png",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Introduction
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            향기 나는 탁월한 세탁, 워시앤가이
          </h1>
          <p className="text-lg text-slate-600">
            기업 전문 세탁 대행 업체로서 신뢰를 바탕으로 최상의 프리미엄 세탁
            서비스를 제공하기 위해 끊임없이 연구하고 전진합니다.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={50}>
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/factory_img.png"
            alt="워시앤가이 공장 전경"
            width={1200}
            height={600}
            className="h-full w-full object-cover"
          />
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            기업 철학과 약속
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise.text}
                className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-6 text-center text-slate-700 shadow-sm"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full p-3 ${promise.iconClass}`}
                >
                  <Image
                    src={promise.icon}
                    alt={promise.alt}
                    width={36}
                    height={36}
                  />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed">
                  {promise.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            회사 연혁
          </h2>
          <div className="mt-6 space-y-5">
            {milestones.map((item, index) => (
              <div
                key={`${item.year}-${index}`}
                className="flex flex-col gap-2 border-l-4 border-blue-600 pl-4"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {item.year}
                </span>
                <p className="text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">핵심 업종</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {serviceFocuses.map((focus) => (
              <div key={focus.title} className="group relative overflow-hidden rounded-3xl shadow-md">
                <Image
                  src={focus.image}
                  alt={focus.title}
                  width={400}
                  height={360}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                    {focus.titleEnglish}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{focus.title}</p>
                  <p className="mt-1 text-xs text-white/80">
                    {focus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={400}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">운영 인프라</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">운영</h3>
              <p className="mt-2 text-slate-600">
                월요일부터 토요일까지 주·야간 운영으로 긴급 상황에도 대응합니다.
                자회사 (주)내추럴크릿이 365일 24시간 A/S와 기계 공급을 지원합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                설비 현황
              </h3>
              <p className="mt-2 text-slate-600">
                HS 크린텍 PAROS 50kg · 100kg 세탁기, 50~80kg 건조기를 다수
                보유하며 베이직·프리미엄 라인 전용 설비를 구성했습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                친환경 세제
              </h3>
              <p className="mt-2 text-slate-600">
                친환경 세제 “겔업(gelup)”과 자체 개발 특수 세제를 적용합니다.
                고급 샤프란 섬유유연제, 드라이시트, 고압 살균 스팀으로 향과
                위생을 동시에 잡았습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">물류</h3>
              <p className="mt-2 text-slate-600">
                50톤 처리 가능한 수돗물 인프라와 1톤 / 2.5톤 내장탑 차량으로
                새벽·저녁 수거/납품을 빠르게 수행합니다.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
