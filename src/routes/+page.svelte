<!-- <script context="module">
	export const prerender = true;
</script> -->

<script>
	import { onMount } from 'svelte';
	import HomeBackGround from '$lib/HomeBackground.svelte';
	let onLoad = false;
	onMount(async () => {
		setTimeout(() => (onLoad = true));
	});
</script>

<svelte:head>
	<link rel="preload" href="https://www.itsnk.fyi/_app/immutable/assets/2.1a9c3918.css" as="style"/>
	<link rel="preload" href="https://www.itsnk.fyi/_app/immutable/assets/0.3e28afb9.css" as="style"/>
	<title>itsnk's Homepage</title>
	<!-- <link rel="icon" href="/favicon.png" /> -->
	<meta charset="UTF-8" />
	<meta name="description" content="itsnk's Homepage" />
</svelte:head>

{#if onLoad}
	<HomeBackGround />
{/if}
