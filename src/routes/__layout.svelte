<script>
	import '../app.css';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { onMount } from 'svelte';
	import { menu } from '$lib/header/MenuLoad.js';

	$: visible = false;
	let onLoad = false;
	$: sidebar_show = false;
	// let menu_show;

	menu.subscribe((value) => {
		visible = value;
	});

	onMount(() => {
		setTimeout(() => (onLoad = true), 50);
	});
</script>

<main>
	<MenuIcon {sidebar_show} {onLoad} {visible} on:click={() => (sidebar_show = !sidebar_show)} />
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
