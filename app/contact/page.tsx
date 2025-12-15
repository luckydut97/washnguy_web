export default function ContactPage() {
  return (
    <div className="space-y-10 pb-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          문의하기
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">
          상담 및 제휴 문의
        </h1>
        <p className="text-lg text-slate-600">
          익일 세탁 서비스와 맞춤형 프로세스를 경험해 보세요. 아래 연락처 또는
          폼으로 문의를 남겨주시면 담당자가 빠르게 연락드립니다.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">연락처</h2>
          <dl className="mt-6 space-y-4 text-slate-700">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                PHONE
              </dt>
              <dd className="text-lg font-semibold text-slate-900">
                02-000-0000
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                EMAIL
              </dt>
              <dd>contact@washnguy.co.kr</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                ADDRESS
              </dt>
              <dd>경기도 남양주 워시앤가이 본사</dd>
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
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              placeholder="연락처 또는 이메일"
              type="text"
            />
            <textarea
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
              rows={4}
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

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <iframe
          title="워시앤가이 위치"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6997020500624!2d127.1054324!3d37.5207999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca55a963c2e17%3A0xd3642f7bba7d6857!2z7ISc7Jq47Yq567OE7IucIOyVhO2KuA!5e0!3m2!1sko!2skr!4v1715670000000!5m2!1sko!2skr"
          className="h-72 w-full rounded-3xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
