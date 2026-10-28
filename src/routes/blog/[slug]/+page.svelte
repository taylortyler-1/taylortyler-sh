<script lang="ts">
	import ReadingProgress from '#lib/components/ReadingProgress.svelte';
	import { formatDate } from '#lib/date.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let article: HTMLElement | undefined = $state();
</script>

<svelte:head>
	<title>{data.post.title} – Taylor Tyler</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<ReadingProgress target={article} />

<main id="main" class="mx-auto max-w-2xl px-5 py-12 sm:py-20">
	<a
		href="/"
		class="text-sm text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
	>
		<span aria-hidden="true">←</span> All articles
	</a>

	<article bind:this={article} class="mt-10">
		<header class="mb-10">
			<p class="text-sm text-stone-600 dark:text-stone-400">
				<time datetime={data.post.date}>{formatDate(data.post.date)}</time>
				<span aria-hidden="true"> · </span>
				{data.post.readingTime} min read
			</p>
			<h1 class="mt-2 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
				{data.post.title}
			</h1>
			{#if data.post.description}
				<p class="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
					{data.post.description}
				</p>
			{/if}
		</header>

		<div
			class="prose max-w-none font-serif prose-stone sm:prose-lg dark:prose-invert prose-headings:font-sans prose-headings:tracking-tight prose-a:underline-offset-2 prose-pre:font-mono"
		>
			<data.content />
		</div>
	</article>

	<footer class="mt-16 border-t border-stone-200 pt-8 dark:border-stone-800">
		<a
			href="/"
			class="text-sm text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
		>
			<span aria-hidden="true">←</span> Back to all articles
		</a>
	</footer>
</main>
