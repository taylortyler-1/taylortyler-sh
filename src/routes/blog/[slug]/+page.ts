import type { Component } from 'svelte';
import type { PageLoad } from './$types';

// Lazy so each article page only downloads its own content.
const articles = import.meta.glob<Component>('/src/lib/posts/*.md', { import: 'default' });

export const load: PageLoad = async ({ data }) => ({
	...data,
	content: await articles[`/src/lib/posts/${data.post.slug}.md`]()
});
