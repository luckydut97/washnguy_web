import FadeIn from "@/app/components/FadeIn";
import Image from "next/image";
import { getPartners } from "@/lib/notion";
import { defaultPartners } from "@/lib/defaultPartners";

export default async function ClientsPage() {
  const notionPartners = await getPartners();
  const partners =
    notionPartners.length > 0
      ? notionPartners
      : defaultPartners.map((partner) => ({
          id: partner.name,
          name: partner.name,
          description: partner.description,
          logo: partner.logo,
        }));

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            거래처
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
              key={partner.id ?? partner.name}
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} 로고`}
                  width={80}
                  height={40}
                  className="h-12 w-20 object-contain"
                />
              ) : (
                <div className="flex h-12 w-20 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-400">
                  LOGO
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  {partner.name}
                </h2>
                <p className="mt-1 text-slate-600">
                  {partner.description ?? "세부 설명을 준비 중입니다."}
                </p>
              </div>
            </div>
          ))}
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">세탁 가능 업종</h2>
          <p className="mt-1 text-sm text-slate-500">
            피트니스, 노인복지, 작업복 등 업종별 전용 공정을 운영합니다.
          </p>
          <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
            <li>· 야구단 / 스포츠 팀</li>
            <li>· 피트니스 센터 / 웰니스 시설</li>
            <li>· 골프장 및 컨트리클럽</li>
            <li>· 사내 예식장 / 웨딩</li>
            <li>· 리조트 / 호텔 / 수영장</li>
            <li>· IT / 제조 / 금융 사무공간</li>
            <li>· 노인복지 / 재활센터</li>
            <li>· 공공기관 / 교육 기관 / 관공서</li>
            <li>· 개인 / 소규모 영세 사업장</li>
            <li>· 기타 단체 시설 및 개인</li>
          </ul>
        </section>
      </FadeIn>
    </div>
  );
}
