import FadeIn from "@/app/components/FadeIn";

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
  "PAROS 프리미엄 최신 세탁기 라인 (50kg / 100kg)",
  "대량 세탁 특화 드라이 클리닝",
  "유니폼, 타월, 린넨까지 통합 처리",
  "업종별 맞춤 라벨링 & 포장",
];

export default function ServicePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            서비스 소개
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
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 shadow-[0_25px_50px_rgba(10,15,35,0.55)]">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6 text-yellow-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 18h16l-1.5-7-4 3-2.5-6-2.5 6-4-3L4 18Z"
                  />
                </svg>
              </span>
            <h2 className="text-2xl font-semibold text-white uppercase">
              (추가) Premium 4 Steps
            </h2>
            </div>
            <p className="mt-3 text-slate-100">
              고급 소재 의류와 VIP 파트너를 위한 추가 전용 라인입니다. 향 지속력과
              살균력을 강화해 고객 감동을 실천합니다.
            </p>
            <ol className="mt-6 space-y-3 text-slate-900">
              {premiumSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-yellow-500/40 bg-white px-4 py-3 text-slate-900"
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
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {specialties.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 px-6 py-4 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
