<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
	import { menu } from '$lib/MenuLoad.js';
	// import Image from 'svelte-image';
	import { lazyLoad } from '$lib/LazyLoad.js';

	let src = '/@312 no text.webp';
	let onLoad = false;
	let img_load = false;
	const imgUrl = new URL(src, import.meta.url).href;

	onMount(() => {
		setTimeout(() => (onLoad = true));
	});

	function loadMenu() {
		menu.set(true);
		img_load = true;
	}

	// grab some place holder images
	async function fetchData() {
		const res = await fetch(imgUrl);
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}
</script>

<div class="container">
	<div
		in:fly|global={{ y: 1000, duration: 800, easing: quartInOut }}
		out:fade|global={{ duration: 500, easing: backOut }}
		on:introend={loadMenu}
	>
		<img {src} loading="lazy" alt="img" />
		<!-- {#await fetchData()} -->
		<!-- <Image {src} /> -->
		<!-- <img {src} alt="placeholder" /> -->
		<!-- <p>...Loading...</p>
		{:then image}
			<img use:lazyLoad={imgUrl} />
		{:catch e}
			<p style="color: red">{e.message}</p>
		{/await} -->
	</div>
	{#if img_load}
		<h1
			in:fly|global={{ y: 50, duration: 700 }}
			out:fly|global={{ y: 700, duration: 1000, opacity: 0.2 }}
		>
			Hello there, itsnk
		</h1>
	{/if}
	<slot />
</div>

<style>
	:global(img) {
		-webkit-user-drag: none;
		display: block;
		max-width: 100%;
		height: auto;
		width: 100%;
	}
	h1 {
		display: block;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
		font-size: 150px;
		font-size: 9vw;
		top: 22%;
		left: 10%;
		max-width: 100%;
		height: auto;
		padding-left: 40px;
	}
	div.container {
		margin-bottom: 8vw;
	}
</style>
