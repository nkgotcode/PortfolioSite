<script>
	import { onMount } from 'svelte';
	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { backOut, cubicOut, quartIn, quartInOut, quartOut, sineIn, sineOut } from 'svelte/easing';
	import { menu, sidebar_show } from '$lib/header/MenuLoad.js';
	import Image from 'svelte-image';

	let src = '/@312 no text.webp';
	let onLoad = false;
	$: blurry = $sidebar_show;

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
	<!-- <div class="img-bg">
		<h1
			in:fly={{ y: -1000, duration: 1500 }}
			out:fly={{ y: 1000, duration: 300 }}
			on:introend={loadMenu}
		>
			Hello there,
			<br />itsnk
		</h1>
		<slot />
	</div> -->
	<!-- <img
		class:blur={blurry}
		{src}
		alt="HomeBackground"
		in:fly={{ y: 1000, duration: 1000, easing: quartInOut }}
		out:fly={{ x: -1500, duration: 1200, easing: backOut }}
		on:introend={loadMenu}
	/> -->
	<div
		in:fly={{ y: 1000, duration: 1200, easing: quartInOut }}
		out:fly={{ x: -1500, duration: 1200, easing: backOut }}
		on:introend={loadMenu}
	>
		<Image {src} placeholder={false} />
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
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		display: block;
		max-width: 100%;
		height: auto;
		width: auto;
	}
	h1 {
		display: block;
		color: #f5f5f5;
		/* font-family: 'Open Sans', sans-serif; */
		/* font-family: 'Zen Kaku Gothic Antique', sans-serif; */
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 150px;
		font-size: 9vw;
		/* position: absolute; */
		top: 22%;
		left: 10%;
		max-width: 100%;
		height: auto;
		padding-left: 40px;
		/* font-weight: 500; */
	}
</style>
