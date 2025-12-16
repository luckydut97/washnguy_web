This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment variables

Create a `.env.local` (and set the same keys in Vercel) with the following values:

| Name | Description |
| --- | --- |
| `NOTION_API_KEY` | Notion integration token with read access to the partner database. |
| `NOTION_PARTNERS_DB_ID` | Database ID that stores 파트너 로고/설명 정보. Columns: `Name`(title), `Description`(rich text), `Logo`(files or URL). |
| `RESEND_API_KEY` | Resend API key (optional – only needed when 문의 폼을 다시 활성화할 때 사용). |
| `MAIL_FROM_ADDRESS` | 메일 발신 주소(Resend에서 인증된 도메인). |
| `CONTACT_RECEIVER` | 문의 메일을 받을 주소. |

Notion 값이 비어 있으면 기본 더미 데이터로 렌더링하고, Resend 값이 없으면 문의 폼은 단순 UI로 유지됩니다.
