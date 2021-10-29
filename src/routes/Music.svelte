<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import {
		expoOut,
		backInOut,
		backOut,
		backIn,
		quartInOut,
		cubicIn,
		expoIn,
		quartIn
	} from 'svelte/easing';
	import { onMount } from 'svelte';
	import MusicBackground from '$lib/header/MusicBackground.svelte';
	import EmbeddedSongs from '$lib/header/EmbeddedSongs.svelte';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import MusicContent from '$lib/header/MusicContent.svelte';
	import { sidebar_show } from '$lib/header/MenuLoad.js';
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true));
	});
	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<!-- for google fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if onLoad}
	<MusicBackground>
		<MenuIcon on:click={handleMenuClick} />
	</MusicBackground>
{/if}

<style>
</style>
