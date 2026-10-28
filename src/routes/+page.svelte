<script lang="ts">
	import { formatDate } from '#lib/date.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Articles – Taylor Tyler</title>
</svelte:head>

<main id="main" class="mx-auto max-w-2xl px-5 py-16 sm:py-24">
	<h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">Articles</h1>

	{#if data.posts.length === 0}
		<p class="mt-8 text-stone-600 dark:text-stone-400">Nothing here yet — check back soon.</p>
	{:else}
		<ul class="mt-10 divide-y divide-stone-200 dark:divide-stone-800">
			{#each data.posts as post (post.slug)}
				<li>
					<a
						href="/blog/{post.slug}"
						class="group -mx-3 block rounded-lg px-3 py-6 transition-colors duration-300 hover:bg-stone-100/50 focus-visible:bg-stone-100 dark:hover:bg-stone-900/40 dark:focus-visible:bg-stone-900"
					>
						<p class="text-sm text-stone-600 dark:text-stone-400">
							<time datetime={post.date}>{formatDate(post.date)}</time>
							<span aria-hidden="true"> · </span>
							{post.readingTime} min read
						</p>
						<h2
							class="mt-1 text-xl font-semibold tracking-tight decoration-stone-300 underline-offset-4 group-hover:underline dark:decoration-stone-600"
						>
							{post.title}
						</h2>
						{#if post.description}
							<p class="mt-2 leading-relaxed text-stone-600 dark:text-stone-400">
								{post.description}
							</p>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>
