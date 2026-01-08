import { simpleGit } from 'simple-git';

const git = simpleGit();

export interface CommitInfo {
	date: string;
	message: string;
	hash: string;
}

export async function getFileHistory(filePath: string): Promise<CommitInfo[]> {
	try {
		const log = await git.log({ file: filePath });
		return log.all.map(commit => ({
			date: commit.date,
			message: commit.message,
			hash: commit.hash,
		}));
	} catch (error) {
		console.error(`Error fetching git history for ${filePath}:`, error);
		return [];
	}
}

export async function getFileDates(filePath: string): Promise<{ created: Date | null, updated: Date | null }> {
	try {
		const history = await getFileHistory(filePath);
		if (history.length === 0) {
			return { created: null, updated: null };
		}
		return {
			created: new Date(history[history.length - 1].date),
			updated: new Date(history[0].date),
		};
	} catch (error) {
		console.error(`Error fetching git dates for ${filePath}:`, error);
		return { created: null, updated: null };
	}
}

export async function getAllCommits(): Promise<CommitInfo[]> {
	try {
		const log = await git.log();
		return log.all.map(commit => ({
			date: commit.date,
			message: commit.message,
			hash: commit.hash,
		}));
	} catch (error) {
		console.error('Error fetching all git commits:', error);
		return [];
	}
}
