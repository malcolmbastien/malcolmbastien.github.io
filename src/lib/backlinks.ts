import { getCollection } from 'astro:content';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

// Function to extract wiki-style links from a post's markdown content
function extractWikiLinks(content: string): string[] {
  const links: string[] = [];

  // Parse markdown to AST
  const tree = unified().use(remarkParse).parse(content);

  // Visit all link nodes and collect wiki-style links
  visit(tree, 'link', (node) => {
    // Check if this is a wiki-style link (starts with /posts/)
    if (node.url && node.url.startsWith('/posts/')) {
      const slug = node.url.replace('/posts/', '');
      links.push(slug);
    }
  });

  return links;
}

// Function to build the backlinks map
export async function buildBacklinksMap(): Promise<Record<string, string[]>> {
  const posts = await getCollection('posts');
  const backlinksMap: Record<string, string[]> = {};

  // Initialize empty arrays for all posts
  posts.forEach(post => {
    backlinksMap[post.slug] = [];
  });

  // Extract links from each post and build the backlinks map
  posts.forEach(post => {
    const content = post.body;
    const linkedSlugs = extractWikiLinks(content);

    // Add this post as a backlink for each post it links to
    linkedSlugs.forEach(linkedSlug => {
      // Only add if the linked post exists (avoid broken links)
      if (backlinksMap[linkedSlug] !== undefined && linkedSlug !== post.slug) {
        backlinksMap[linkedSlug].push(post.slug);
      }
    });
  });

  return backlinksMap;
}

// Function to get backlinks for a specific post
export async function getBacklinksForPost(postSlug: string): Promise<string[]> {
  const backlinksMap = await buildBacklinksMap();
  return backlinksMap[postSlug] || [];
}