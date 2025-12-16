import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

const basicSteps = [
  "세탁물 수거",
  "세탁물 분리",
  "친환경 세제 세탁",
  "2회 헹굼",
  "섬유 유연제 투입",
  "탈수 & 건조",
  "포장 & 배송",
];

const premiumSteps = [
  "고급 섬유유연제",
  "고급 세균탈취제",
  "고급 건조용 드라이시트",
  "고압 살균 스팀",
];

const specialties = [
  {
    tag: "MASS BATCH",
    title: "대량 일괄 세탁",
    description: "200벌 이상의 대량 배치도 일정 품질로 처리합니다.",
    icon: "/service_img_1.svg",
    accent: "bg-slate-100 text-slate-800",
  },
  {
    tag: "PERSONALIZED",
    title: "맞춤 라벨 & 포장",
    description: "개별 맞춤 라벨링·포장으로 혼선 없이 정확히 배송합니다.",
    icon: "/service_img_2.svg",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    tag: "SENSITIVE CARE",
    title: "섬세한 소재 케어",
    description:
      "고급 소재와 VIP 유니폼을 위한 섬세한 온도·압력 프로파일을 적용합니다.",
    icon: "/service_img_3.svg",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    tag: "24H RESPONSE",
    title: "24시간 응답",
    description: "야간·주말 수거 및 익일 배송으로 재고 부담을 줄입니다.",
    icon: "/service_img_4.svg",
    accent: "bg-amber-50 text-amber-600",
  },
];

export default function ServicePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Service
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            BASIC & PREMIUM LINE
          </h1>
          <p className="text-lg text-slate-600">
            11단계 세탁 프로세스로 대량 세탁물도 일관된 품질로 처리합니다.
            베이직 라인의 기본 프로세스 위에 프리미엄 항목을 더해 향과 위생을
            강화할 수 있습니다.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 uppercase">
              (기본) Basic 7 Steps
            </h2>
            <p className="mt-3 text-slate-600">
              모든 기업 고객에게 기본으로 제공되는 베이직 라인으로 수거부터 배송
              까지 워시앤가이 팀이 직접 관리합니다.
            </p>
            <ol className="mt-6 space-y-3 text-slate-700">
              {basicSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-gradient-to-br from-amber-200 via-yellow-100 to-yellow-300 p-8 shadow-[0_25px_50px_rgba(255,191,0,0.35)]">
            <div className="premium-shimmer absolute inset-0 opacity-30" />
            <div className="relative flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-amber-500 shadow-inner">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 18h16l-1.5-7-4 3-2.5-6-2.5 6-4-3L4 18Z"
                  />
                </svg>
              </span>
              <h2 className="text-2xl font-semibold uppercase text-slate-900">
                (추가) Premium 4 Steps
              </h2>
            </div>
            <p className="relative mt-3 text-slate-800">
              고급 소재 의류와 VIP 파트너를 위한 추가 전용 라인입니다. 향 지속력과
              살균력을 강화해 고객 감동을 실천합니다.
            </p>
            <ol className="relative mt-6 space-y-3 text-slate-900">
              {premiumSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-yellow-400/60 bg-white/90 px-4 py-3 text-slate-900 shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-sm font-semibold text-white shadow">
                    {index + basicSteps.length + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">자신있습니다!</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {specialties.map((item) => (
              <div
                key={item.tag}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 shadow-sm"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${item.accent}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.tag}
                    width={32}
                    height={32}
                    className="h-6 w-6"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.tag}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
