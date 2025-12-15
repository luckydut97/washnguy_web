import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";

const partners = [
  {
    name: "해비치 컨트리클럽",
    desc: "골프장 타월 및 정장류",
    logo: "/company_logo_1.png",
  },
  {
    name: "LG트윈스 프로야구단",
    desc: "선수단 전용 세탁",
    logo: "/company_logo_2.png",
  },
  {
    name: "NC소프트 판교 본사",
    desc: "사내 피트니스 / 유니폼",
    logo: "/company_logo_3.png",
  },
  {
    name: "K2코리아 그룹",
    desc: "사내 운동시설 전체 세탁",
    logo: "/company_logo_4.png",
  },
  {
    name: "한국타이어",
    desc: "사내 피트니스 / 유니폼",
    logo: "/company_logo_5.png",
  },
  {
    name: "두산베어스 프로야구단",
    desc: "선수단 / 직원 유니폼 및 타월",
    logo: "/company_logo_6.png",
  },
  {
    name: "호반건설 그룹",
    desc: "사내 피트니스 / 유니폼",
    logo: "/company_logo_7.png",
  },
  {
    name: "삼성전자",
    desc: "기흥 / 서초 사내 예식장",
    logo: "/company_logo_8.png",
  },
  {
    name: "두나무 본사",
    desc: "사무 / 행사 유니폼",
    logo: "/company_logo_9.png",
  },
];

export default function ClientsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Customer list
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            워시앤가이 파트너사
          </h1>
          <p className="text-lg text-slate-600">
            프로 스포츠, IT, 제조, 웨딩, 레저 등 대량 세탁이 필요한 다양한 업종과
            협력하고 있습니다.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} 로고`}
                width={80}
                height={40}
                className="h-12 w-20 object-contain"
              />
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {partner.name}
                </h2>
                <p className="mt-1 text-slate-600">{partner.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">주요 업종</h2>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>· 야구단 / 스포츠 팀</li>
            <li>· 피트니스 센터 / 웰니스 시설</li>
            <li>· 골프장 및 컨트리클럽</li>
            <li>· 사내 예식장 / 웨딩</li>
            <li>· 리조트 / 호텔 / 수영장</li>
            <li>· IT / 제조 / 금융 사무공간</li>
          </ul>
        </section>
      </FadeIn>
    </div>
  );
}
