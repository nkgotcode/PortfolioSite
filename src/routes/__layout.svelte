<script>
	import '../app.css';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { onMount } from 'svelte';
	import { url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';

	let p = $page.path;

	onMount(() => {
		url_path.set(p);
	});
</script>

<svelte:head>
	<title>About</title>
	<!-- for google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	<!-- <MenuIcon on:click={handleMenuClick} /> -->
	<slot />
</main>

<style>
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
