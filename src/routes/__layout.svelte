<script>
	import '../app.css';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { onMount } from 'svelte';

	$: visible = false;
	let onLoad = false;
	$: sidebar_show = false;

	onMount(() => {
		setTimeout(() => (onLoad = true), 50);
		setTimeout(() => (visible = true), 1000);
	});
</script>

<main>
	<HomeBackGround>
		<MenuIcon {sidebar_show} {onLoad} {visible} on:click={() => (sidebar_show = !sidebar_show)} />
		<slot />
	</HomeBackGround>
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
</style>
