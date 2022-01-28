<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';

	let p = $page.path;

	onMount(() => {
		url_path.set(p);
	});
</script>

<svelte:head>
	<title>itsnk</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<main>
	<slot />
</main>

<style>
	/* zen-kurenaido-regular - latin */
	@font-face {
		font-family: 'Zen Kurenaido';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/zen-kurenaido-v7-latin-regular.eot'); /* IE9 Compat Modes */
		src: local(''),
			url('/fonts/zen-kurenaido-v7-latin-regular.eot?#iefix') format('embedded-opentype'),
			/* IE6-IE8 */ url('/fonts/zen-kurenaido-v7-latin-regular.woff2') format('woff2'),
			/* Super Modern Browsers */ url('/fonts/zen-kurenaido-v7-latin-regular.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/zen-kurenaido-v7-latin-regular.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/zen-kurenaido-v7-latin-regular.svg#ZenKurenaido')
				format('svg'); /* Legacy iOS */
	}
	main {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin: 0;
		box-sizing: border-box;
		background-color: #0f0f0f;
	}
	:global(body) {
		background-color: #0f0f0f;
		color: #0f0f0f;
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
