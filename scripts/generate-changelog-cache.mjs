#!/usr/bin/env node
/**
 * Generate changelog cache for all notes
 * 
 * This script runs during build to generate a JSON cache of git history
 * for all content files. This allows Vercel (which uses shallow clones)
 * to display changelog data without needing full git history.
 * 
 * Run this locally or in CI before deploying to ensure the cache is up to date.
 */

import { simpleGit } from 'simple-git';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = join(__dirname, '../.astro');
const CACHE_FILE = join(CACHE_DIR, 'changelog-cache.json');

const git = simpleGit();

async function ensureHistory() {
    try {
        const isShallow = await git.revparse(['--is-shallow-repository']);
        if (isShallow === 'true') {
            console.log('Shallow repository detected. Attempting to fetch history...');
            try {
                await git.fetch(['--unshallow']);
                console.log('Successfully fetched full history');
            } catch (e) {
                console.warn('Could not unshallow repository:', e.message);
                return false;
            }
        }
        return true;
    } catch (e) {
        console.warn('Could not check repository depth:', e.message);
        return false;
    }
}

async function getFileHistory(filePath) {
    try {
        const rawLog = await git.raw([
            'log',
            '--follow',
            '--pretty=format:%H|%ad|%s',
            '--date=iso',
            '--stat',
            '--',
            filePath
        ]);

        if (!rawLog) {
            return [];
        }

        const commits = [];
        const sections = rawLog.split(/\n(?=[0-9a-f]{40}\|)/);

        for (const section of sections) {
            const lines = section.trim().split('\n');
            if (lines.length === 0) continue;

            const header = lines[0];
            const [hash, date, message] = header.split('|');

            let insertions = 0;
            let deletions = 0;

            const statLine = lines.find(l => l.includes('changed,') && (l.includes('insertion') || l.includes('deletion')));
            if (statLine) {
                const insMatch = statLine.match(/(\d+) insertion/);
                const delMatch = statLine.match(/(\d+) deletion/);
                if (insMatch) insertions = parseInt(insMatch[1]);
                if (delMatch) deletions = parseInt(delMatch[1]);
            }

            commits.push({
                hash,
                date,
                message,
                insertions,
                deletions
            });
        }

        return commits;
    } catch (error) {
        console.error(`Error fetching history for ${filePath}:`, error.message);
        return [];
    }
}

async function main() {
    console.log('📝 Generating changelog cache...\n');

    const hasHistory = await ensureHistory();
    if (!hasHistory) {
        console.error('❌ Cannot generate cache: Repository has shallow history and could not be unshallowed');
        console.error('   Please run this script locally where you have full git history.');
        process.exit(1);
    }

    // Import glob to find all content files
    const { glob } = await import('glob');
    const contentFiles = await glob('src/content/notes/**/*.{md,mdx}');
    
    console.log(`Found ${contentFiles.length} content files`);

    const cache = {
        generatedAt: new Date().toISOString(),
        entries: {}
    };

    let successCount = 0;
    let failCount = 0;

    for (const file of contentFiles) {
        process.stdout.write(`Processing ${file}... `);
        const history = await getFileHistory(file);
        
        if (history.length > 0) {
            cache.entries[file] = history;
            console.log(`✓ (${history.length} commits)`);
            successCount++;
        } else {
            console.log('✗ (no history)');
            failCount++;
        }
    }

    // Ensure cache directory exists
    if (!existsSync(CACHE_DIR)) {
        await mkdir(CACHE_DIR, { recursive: true });
    }

    // Write cache file
    await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
    
    console.log(`\n✅ Cache generated successfully!`);
    console.log(`   Files with history: ${successCount}`);
    console.log(`   Files without history: ${failCount}`);
    console.log(`   Cache location: ${CACHE_FILE}`);
    console.log(`\n💡 Remember to commit the cache file if you want it available on Vercel.`);
}

main().catch(error => {
    console.error('❌ Failed to generate cache:', error);
    process.exit(1);
});
