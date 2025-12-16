const NOTION_API_URL = "https://api.notion.com/v1/databases";
const NOTION_VERSION = "2022-06-28";

type NotionPartner = {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  order?: number;
};

export async function getPartners(): Promise<NotionPartner[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_PARTNERS_DB_ID;

  if (!apiKey || !databaseId) {
    console.warn("Notion API env vars missing. Falling back to empty partner list.");
    return [];
  }

  try {
    const response = await fetch(`${NOTION_API_URL}/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Failed to fetch Notion partners:", text);
      return [];
    }

    const data = await response.json();
    const partners = (data.results ?? []).map((item: any) => {
      const properties = item.properties ?? {};
      const nameProp = properties.Name?.title?.[0]?.plain_text ?? "무제";
      const descProp =
        properties.Description?.rich_text?.[0]?.plain_text ?? undefined;
      const logoProp =
        properties.Logo?.files?.[0]?.file?.url ??
        properties.Logo?.files?.[0]?.external?.url ??
        properties.LogoURL?.url ??
        undefined;

      return {
        id: item.id,
        name: nameProp,
        description: descProp,
        logo: logoProp,
        order: properties.Order?.number ?? undefined,
      };
    });

    return partners.sort(
      (
        a: { order?: number },
        b: { order?: number }
      ) => {
        const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
        const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
        return orderA - orderB;
      }
    );
  } catch (error) {
    console.error("Notion API error:", error);
    return [];
  }
}
