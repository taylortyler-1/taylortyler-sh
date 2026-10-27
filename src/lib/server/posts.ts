type Frontmatter = {
	title: string;
	date: string;
	description?: string;
	draft?: boolean;
};

export type Post = Frontmatter & {
	slug: string;
	readingTime: number;
};

const WORDS_PER_MINUTE = 230;

const frontmatter = import.meta.glob<Frontmatter>('/src/lib/posts/*.md', {
	eager: true,
	import: 'metadata'
});
const sources = import.meta.glob<string>('/src/lib/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const slugFromPath = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

const minutesToRead = (source: string) => {
	const body = source.replace(/^---[\s\S]*?---/, '');
	const words = body.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

export const posts: Post[] = Object.entries(frontmatter)
	.map(([path, meta]) => ({
		...meta,
		slug: slugFromPath(path),
		readingTime: minutesToRead(sources[path])
	}))
	.filter((post) => !post.draft)
	.sort((a, b) => b.date.localeCompare(a.date));
