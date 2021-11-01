<script>
	import { onMount } from 'svelte';
	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
	import { menu, sidebar_show } from '$lib/header/MenuLoad.js';

	let src = '/src/assets/@312 no text.jpg';
	let onLoad = false;
	$: blurry = $sidebar_show;

	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});

	function loadMenu() {
		menu.set(true);
	}
</script>

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
	<img
		class:blur={blurry}
		{src}
		alt="HomeBackground"
		in:fly={{ y: 1000, duration: 800, easing: quartInOut }}
		out:fly={{ x: -1500, duration: 1200, easing: backOut }}
		on:introend={loadMenu}
	/>
	<h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
		Hello there, itsnk
	</h1>
{/if}
<slot />

<style>
	.img-bg {
		background-image: url('/src/assets/@312 no text.jpg');
		background-size: contain;
		background-repeat: no-repeat;
	}
	img {
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
		font-size: 7vw;
		/* position: absolute; */
		top: 22%;
		left: 10%;
		max-width: 100%;
		height: auto;
		padding-left: 40px;
		/* font-weight: 500; */
	}
</style>
