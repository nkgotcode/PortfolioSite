<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import { page } from '$app/stores';
	import { url_path, sidebar_show } from '$lib/header/MenuLoad.js';
	import MenuIcon from '$lib/header/MenuIcon.svelte';

	let onLoad = false;
	let p = $page.path;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
		url_path.set(p);
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
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if onLoad}
	<HomeBackGround>
		<MenuIcon on:click={handleMenuClick} />
		<!-- <div>

		</div> -->
		<!-- <h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
			Hello there,
			<br />itsnk
		</h1> -->
	</HomeBackGround>
{/if}
