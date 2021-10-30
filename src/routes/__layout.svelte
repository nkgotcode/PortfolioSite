<script>
	import '../app.css';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { onMount } from 'svelte';
	import { sidebar_show, url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';

	let p = $page.path;

	onMount(() => {
		setTimeout(() => (onLoad = true), 50);
		url_path.set(p);
	});

	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<main>
	<MenuIcon on:click={handleMenuClick} />
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
</style>
