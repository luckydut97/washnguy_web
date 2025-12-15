import FadeIn from "@/app/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            문의하기
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            상담 및 제휴 문의
          </h1>
          <p className="text-lg text-slate-600">
            익일 세탁 서비스와 맞춤형 프로세스를 경험해 보세요. 아래 연락처로 연락주시거나,
            양식에 문의를 남겨주시면 담당자가 빠르게 연락드리겠습니다.
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">연락처</h2>
            <dl className="mt-6 space-y-4 text-slate-700">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  TEL
                </dt>
                <dd className="text-lg font-semibold text-slate-900">
                  031-795-4356
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  MOBILE
                </dt>
                <dd className="text-lg font-semibold text-slate-900">
                  010-4084-4863
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  EMAIL
                </dt>
                <dd>kwoongs80@daum.net</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  ADDRESS
                </dt>
                <dd>경기도 하남시 덕풍동 250-5</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  HOURS
                </dt>
                <dd>월-토 주/야간 운영</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">문의 폼</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="회사명"
                  type="text"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="담당자 이름"
                  type="text"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="연락처"
                  type="text"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="이메일"
                  type="email"
                />
              </div>
              <textarea
                className="w-full rounded-3xl border border-slate-200 px-4 py-4 text-sm focus:border-blue-500 focus:outline-none"
                rows={6}
                placeholder="문의 내용을 작성해주세요."
              />
              <button
                type="button"
                className="w-full rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500"
              >
                문의 보내기
              </button>
            </form>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="워시앤가이 위치"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0195330646616!2d127.2106403!3d37.5124224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f5f2e57aed3%3A0xf339c7efda7a6b6d!2z6rK96riw64KYIO2VnOyduO2VhOyEnCDqtJHthrXquLggMjUwLTU!5e0!3m2!1sko!2skr!4v1736220000000!5m2!1sko!2skr"
            className="h-72 w-full rounded-3xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </FadeIn>
    </div>
  );
}
