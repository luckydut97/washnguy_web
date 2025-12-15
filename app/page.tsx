import FadeIn from "@/app/components/FadeIn";

const strengths = [
  "향기 나는 탁월한 세탁",
  "최고급 최신 세탁 기계",
  "우수한 세탁 품질",
  "최상의 고객 만족 서비스",
];

const industries = [
  "프로 야구단 유니폼 / 타월류",
  "피트니스 & 웰니스 센터",
  "골프장 및 리조트",
  "정장 / 의류 / 린넨 일괄 세탁",
];

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <FadeIn>
        <section className="hero-sheen rounded-3xl border border-slate-200 px-6 py-12 shadow-sm md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            기업 전문 세탁 대행
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            POWER OFFER 프리미엄 세탁 서비스로 고객 감동을 실천하는
            <span className="text-blue-600"> 워시앤가이</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            대량 세탁 특화와 친환경 프로세스를 결합해 기업 고객만을 위한 맞춤형
            세탁 솔루션을 제공합니다. 약속된 시간 내에 수거부터 납품까지 완수해
            재고 부담을 해소합니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-sm font-medium text-slate-600 md:flex-row md:text-base">
            {strengths.map((item) => (
              <div
                key={item}
                className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/service"
              className="rounded-full bg-blue-600 px-8 py-3 text-center text-white transition hover:bg-blue-500"
            >
              서비스 살펴보기
            </a>
            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-8 py-3 text-center font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              상담 요청하기
            </a>
          </div>
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
              HS 크린텍 PAROS 50kg·100kg 라인업과 대형 건조기, 50톤 처리 가능한
              물류 동선을 기반으로 365일 안정적인 세탁을 제공합니다.
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
                <dt className="font-semibold text-slate-900">물류</dt>
                <dd>1톤 / 2.5톤 내장탑 차량</dd>
              </div>
            </dl>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                INDUSTRIES
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                대량 세탁이 필요한 핵심 업종 파트너
              </h2>
              <p className="mt-3 text-slate-600">
                두산베어스, LG트윈스, NCSOFT, K2 등 다양한 기업 고객과 함께하며
                맞춤 세탁 시스템을 운영합니다.
              </p>
            </div>
            <div className="grid gap-3 text-sm font-medium text-slate-700 md:w-80">
              {industries.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
