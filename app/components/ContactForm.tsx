'use client';

import { useState } from "react";

type FormState = {
  company: string;
  name: string;
  contact: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  company: "",
  name: "",
  contact: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "문의 전송에 실패했습니다.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "문의 전송에 실패했습니다.";
      setError(message);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          placeholder="회사명"
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
        />
        <input
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          placeholder="담당자 이름"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          placeholder="연락처"
          type="text"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
          placeholder="이메일"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <textarea
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
        rows={5}
        placeholder="문의 내용을 작성해주세요."
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />
      {status === "success" && (
        <p className="text-sm font-medium text-green-600">
          문의가 정상적으로 접수되었습니다. 빠르게 연락드리겠습니다.
        </p>
      )}
      {status === "error" && error && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "보내는 중..." : "문의 보내기"}
      </button>
    </form>
  );
}
