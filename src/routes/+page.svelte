<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import HomeBackGround from '$lib/HomeBackground.svelte';
	let onLoad = false;
	onMount(async () => {
		setTimeout(() => (onLoad = true));
	});
</script>

<svelte:head>
	<title>itsnk's Homepage</title>
	<!-- <link rel="icon" href="/favicon.png" /> -->
	<meta charset="UTF-8" />
	<meta name="description" content="itsnk's Homepage" />
</svelte:head>

{#if onLoad}
	<HomeBackGround />
{/if}
