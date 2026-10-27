<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="mx-auto flex max-w-2xl items-center justify-between px-5 pt-6 text-sm">
	<a href="/" class="font-semibold tracking-tight">Taylor Tyler</a>
	<nav class="flex gap-5 text-stone-500 dark:text-stone-400">
		<a href="/" class="transition-colors hover:text-stone-900 dark:hover:text-stone-100">Articles</a>
		<a href="/about" class="transition-colors hover:text-stone-900 dark:hover:text-stone-100"
			>About</a
		>
	</nav>
</header>

{@render children()}
