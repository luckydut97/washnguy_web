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
              간단히 문자를 남겨주시면 담당자가 빠르게 연락드리겠습니다.
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
                  <dd className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <a
                        href="tel:0317954356"
                        className="transition hover:text-blue-600"
                    >
                      031-795-4356
                    </a>
                    <a
                        href="tel:0317954356"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                      >
                        <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 12.36 12.36 0 0 0 3.88.62 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.44a1 1 0 0 1 1 1 12.36 12.36 0 0 0 .62 3.88 1 1 0 0 1-.24 1Z" />
                      </svg>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    MOBILE
                  </dt>
                  <dd className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                    <a
                        href="tel:01040844863"
                        className="transition hover:text-blue-600"
                    >
                      010-4084-4863
                    </a>
                    <a
                        href="tel:01040844863"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                      >
                        <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 12.36 12.36 0 0 0 3.88.62 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.44a1 1 0 0 1 1 1 12.36 12.36 0 0 0 .62 3.88 1 1 0 0 1-.24 1Z" />
                      </svg>
                    </a>
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
            {/*
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">문의 폼</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-full min-h-[280px] w-full">
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
                    href="https://www.google.com/maps?q=%EA%B2%경기도+하남시+덕풍동+250-5"
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
          </div>
        </section>
      </FadeIn>
      </div>
  );
}
