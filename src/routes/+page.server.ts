import { posts } from '#lib/server/posts.ts';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => ({ posts });
