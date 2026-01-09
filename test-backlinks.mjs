import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

// Test the wiki link extraction
const testContent = `For detailed formatting options, see [[formatting-example]].
Also check [[my-new-thought]].`;

console.log('Testing wiki link extraction...');
console.log('Content:', testContent);

// Parse markdown to AST
const tree = unified().use(remarkParse).parse(testContent);

console.log('\nAST tree:');
console.log(JSON.stringify(tree, null, 2));

// Visit all link nodes and collect wiki-style links
const links: string[] = [];
visit(tree, 'link', (node) => {
  console.log('\nFound link node:', node);
  // Check if this is a wiki-style link (starts with /posts/)
  if (node.url && node.url.startsWith('/posts/')) {
    const slug = node.url.replace('/posts/', '');
    links.push(slug);
    console.log('Extracted slug:', slug);
  }
});

console.log('\nExtracted links:', links);