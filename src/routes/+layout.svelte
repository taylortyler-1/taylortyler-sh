<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a
	href="#main"
	class="sr-only rounded bg-stone-900 px-3 py-2 text-sm text-stone-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 dark:bg-stone-100 dark:text-stone-900"
	>Skip to content</a
>

<header class="mx-auto flex max-w-2xl items-center justify-between px-5 pt-6 text-sm">
	<a href="/" class="font-semibold tracking-tight">Taylor Tyler</a>
	<nav class="flex gap-5 text-stone-600 dark:text-stone-400">
		<a
			href="/"
			aria-current={page.url.pathname === '/' ? 'page' : undefined}
			class="transition-colors hover:text-stone-900 dark:hover:text-stone-100">Articles</a
		>
		<a
			href="/about"
			aria-current={page.url.pathname === '/about' ? 'page' : undefined}
			class="transition-colors hover:text-stone-900 dark:hover:text-stone-100">About</a
		>
	</nav>
</header>

{@render children()}
