<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
	import { menu } from '$lib/header/MenuLoad.js';
	import Image from 'svelte-image';

	let src = '/@312 no text.webp';
	let onLoad = false;

	let y;
	let img_load = false;

	onMount(() => {
		setTimeout(() => (onLoad = true));
	});

	function loadMenu() {
		menu.set(true);
		img_load = true;
	}
</script>

<svelte:window bind:scrollY={y} />
{#if onLoad}
	<div
		in:fly={{ y: 1000, duration: 1200, easing: quartInOut }}
		out:fly={{ x: -1500, duration: 1200, easing: backOut }}
		on:introend={loadMenu}
	>
		<Image {src} />
	</div>
	{#if img_load}
		<h1 in:fly={{ y: 50, duration: 700 }} out:fly={{ y: 700, duration: 1000, opacity: 0.2 }}>
			Hello there, itsnk
		</h1>
	{/if}
{/if}
<slot />

<style>
	:global(img) {
		-webkit-user-drag: none;
		display: block;
		max-width: 100%;
		height: auto;
		width: auto;
	}
	h1 {
		display: block;
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 150px;
		font-size: 9vw;
		top: 22%;
		left: 10%;
		max-width: 100%;
		height: auto;
		padding-left: 40px;
	}
</style>
