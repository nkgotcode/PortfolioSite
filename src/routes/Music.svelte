<script>
	import { onMount } from 'svelte';
	import MusicBackground from '$lib/header/MusicBackground.svelte';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { sidebar_show, url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true));
		url_path.set($page.path);
	});
	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<!-- for google fonts -->
<!-- <svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head> -->

{#if onLoad}
	<MusicBackground>
		<MenuIcon on:click={handleMenuClick} />
	</MusicBackground>
{/if}

<style>
</style>
