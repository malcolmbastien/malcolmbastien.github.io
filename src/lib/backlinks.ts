import { getCollection } from 'astro:content';

// Function to extract wiki-style links from raw markdown content
function extractWikiLinks(content: string): string[] {
  const links: string[] = [];

  // Match wiki-style links: [[link-text]] or [[link-text|display-text]]
  const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  const matches = [...content.matchAll(wikiLinkRegex)];

  matches.forEach((match) => {
    const linkText = match[1].trim();

    // Generate slug from link text (same logic as in remark-wiki-links.mjs)
    const slug = linkText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens

    links.push(slug);
  });

  return links;
}

// Function to build the backlinks map
export async function buildBacklinksMap(): Promise<Record<string, string[]>> {
  const notes = await getCollection('notes');
  const backlinksMap: Record<string, string[]> = {};

  // Initialize empty arrays for all notes (using note.id which includes .md)
  notes.forEach(note => {
    backlinksMap[note.id] = [];
  });

  // Create a map from slug (without .md) to note.id (with .md) for lookup
  const slugToIdMap: Record<string, string> = {};
  notes.forEach(note => {
    const slugWithoutExt = note.id.replace(/\.md$/, '');
    slugToIdMap[slugWithoutExt] = note.id;
  });

  // Extract links from each note and build the backlinks map
  notes.forEach(note => {
    // note.body contains the raw markdown content
    const content = note.body || '';
    const linkedSlugs = extractWikiLinks(content);

    // Add this note as a backlink for each note it links to
    linkedSlugs.forEach(linkedSlug => {
      // Convert slug to full note.id
      const linkedId = slugToIdMap[linkedSlug];
      // Only add if the linked note exists and isn't linking to itself
      if (linkedId && linkedId !== note.id) {
        backlinkedIdsForTarget(backlinksMap[linkedId], note.id);
      }
    });
  });
  return backlinksMap;
}

function backlinkedIdsForTarget(backlinks: string[], id: string) {
    if (!backlinks.includes(id)) {
        backlinks.push(id);
    }
}

// Function to get backlinks for a specific note
export async function getBacklinksForNote(noteId: string): Promise<string[]> {
  const backlinksMap = await buildBacklinksMap();
  return backlinksMap[noteId] || [];
}
