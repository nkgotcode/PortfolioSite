<script>
	import { onMount } from 'svelte';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import { page } from '$app/stores';
	import { url_path, sidebar_show } from '$lib/header/MenuLoad.js';
	import MenuIcon from '$lib/header/MenuIcon.svelte';

	let onLoad = false;
	let p = $page.path;
	onMount(() => {
		setTimeout(() => (onLoad = true));
		url_path.set(p);
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
	<HomeBackGround>
		<MenuIcon on:click={handleMenuClick} />
	</HomeBackGround>
{/if}
