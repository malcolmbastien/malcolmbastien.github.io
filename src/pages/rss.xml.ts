import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const escapeXml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

export const GET: APIRoute = async ({ site }) => {
    const notes = (await getCollection("notes"))
        .filter((note) => !note.data.draft)
        .sort((a, b) => {
            const dateA = a.data.publishedDate ? new Date(a.data.publishedDate).getTime() : 0;
            const dateB = b.data.publishedDate ? new Date(b.data.publishedDate).getTime() : 0;
            return dateB - dateA;
        });

    const origin = site?.origin ?? "https://malcolmbastien.github.io";

    const items = notes
        .map((note) => {
            const url = `${origin}/notes/${note.id.replace(".md", "")}`;
            const pubDate = note.data.publishedDate
                ? new Date(note.data.publishedDate).toUTCString()
                : new Date().toUTCString();
            const description = note.data.summary ?? "";
            const categories = (note.data.tags || [])
                .map((tag) => `      <category>${escapeXml(tag)}</category>`)
                .join("\n");

            return `    <item>
      <title>${escapeXml(note.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(description)}</description>
${categories}
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Malcolm Bastien</title>
    <link>${origin}</link>
    <description>Executive consulting &amp; architectural transformation for modern systems.</description>
    <language>en</language>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
};
