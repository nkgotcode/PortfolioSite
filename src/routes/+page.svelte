<script context="module">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import HomeBackGround from '$lib/HomeBackground.svelte';
	// import { page } from '$app/stores';
	// import { url_path } from '$lib/MenuLoad.js';

	let onLoad = false;
	// let p = $page.url.pathname;
	onMount(async () => {
		setTimeout(() => (onLoad = true));
		// url_path.set(p);
	});
</script>

{#if onLoad}
	<HomeBackGround />
{/if}
