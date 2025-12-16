import { NextResponse } from "next/server";

type ContactPayload = {
  company?: string;
  name?: string;
  contact?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const { company, name, contact, email, message } = body;

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "필수 정보(담당자, 연락처, 문의 내용)를 입력해주세요." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress =
      process.env.MAIL_FROM_ADDRESS ?? "noreply@washnguy-web.com";
    const toAddress =
      process.env.CONTACT_RECEIVER ?? "oksk970912@naver.com";

    if (!apiKey) {
      return NextResponse.json(
        { error: "메일 발송 설정이 완료되지 않았습니다." },
        { status: 500 }
      );
    }

    const subject = `[워시앤가이 문의] ${company ?? ""} ${name}`.trim();
    const html = `
      <h2>새로운 문의가 접수되었습니다.</h2>
      <p><strong>회사명:</strong> ${company || "-"}</p>
      <p><strong>담당자:</strong> ${name}</p>
      <p><strong>연락처:</strong> ${contact}</p>
      <p><strong>이메일:</strong> ${email || "-"}</p>
      <p><strong>문의 내용:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend error:", errorText);
      return NextResponse.json(
        { error: "메일 발송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
