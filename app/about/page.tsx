import FadeIn from "@/app/components/FadeIn";

const milestones = [
  {
    year: "2013",
    detail: "(주)내추럴크릿 세탁기계 사업부 및 세탁 사업부 법인 설립",
  },
  {
    year: "2016",
    detail: "세탁 사업부 시설 확장 (200평 규모)",
  },
  {
    year: "2019",
    detail: "워시앤가이 독자 법인 설립 (90평 규모)",
  },
];

const promises = [
  "기업과의 약속을 지키며 정도를 걷습니다.",
  "환경오염과 유해 화학제품을 배제하고 친환경 세제만 사용합니다.",
  "맞춤 세탁 시스템으로 거래처의 작은 요구에도 귀 기울입니다.",
  "단기 이익보다 장기적인 신뢰와 감동을 추구합니다.",
];

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            회사소개
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

      <FadeIn delay={100}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            기업 철학과 약속
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 text-slate-700"
              >
                {promise}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">연혁</h2>
          <div className="mt-6 space-y-5">
            {milestones.map((item) => (
              <div
                key={item.year}
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
