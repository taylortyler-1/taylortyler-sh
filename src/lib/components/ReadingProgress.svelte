<script lang="ts">
	// Tracks how far the reader is through `target`: 0 when its top reaches the
	// top of the viewport, 1 when its bottom reaches the bottom of the viewport.
	let { target }: { target?: HTMLElement } = $props();

	let progress = $state(0);

	function update() {
		if (!target) return;
		const rect = target.getBoundingClientRect();
		const scrollable = rect.height - window.innerHeight;
		progress = scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable));
	}

	$effect(update);
</script>

<svelte:window onscroll={update} onresize={update} />

<div
	aria-hidden="true"
	class="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-stone-800/60 dark:bg-stone-300/60"
	style:transform="scaleX({progress})"
></div>
