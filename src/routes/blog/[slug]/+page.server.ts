import { error } from '@sveltejs/kit';
import { posts } from '#lib/server/posts.ts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => posts.map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) error(404, 'Article not found');
	return { post };
};
