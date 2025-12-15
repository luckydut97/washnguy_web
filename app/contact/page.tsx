import FadeIn from "@/app/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-10 md:px-8">
      <FadeIn>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            고객센터
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            무료 견적 문의
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
                <dd>경기도 하남시 덕풍동 250-5 (H625+73 하남시 경기도)</dd>
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
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative h-80 w-full">
            <iframe
              title="워시앤가이 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.910337707905!2d127.205537!3d37.5506744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b9cac23f39b75%3A0x0!2z6rK96riw64KYIO2VnOyduO2VhOyEnCDrsKntmLjroZw!5e0!3m2!1sko!2skr!4v1736229999999!5m2!1sko!2skr"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="group relative cursor-pointer">
                <a
                  href="https://www.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84+%ED%95%98%EB%82%A8%EC%8B%9C+%EB%8D%95%ED%92%8D%EB%8F%99+250-5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 text-red-500 drop-shadow-lg transition group-hover:scale-105"
                    fill="currentColor"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </a>
                <div className="pointer-events-none absolute left-1/2 top-12 hidden w-64 -translate-x-1/2 flex items-center justify-center rounded-xl bg-white/95 px-4 py-2 text-center text-[11px] text-slate-600 shadow group-hover:flex">
                  경기도 하남시 덕풍동 250-5
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
