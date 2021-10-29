<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import {
		expoOut,
		quintOut,
		cubicOut,
		expoIn,
		backOut,
		backIn,
		cubicIn,
		quartIn,
		expoInOut
	} from 'svelte/easing';
	import { menu, sidebar_show } from '$lib/header/MenuLoad.js';

	let src = '/src/assets/@312 no text.png';
	let onLoad = false;
	$: blurry = $sidebar_show;

	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});

	function loadMenu() {
		menu.update((n) => true);
	}
</script>

<div>
	{#if onLoad}
		<img
			class:blur={blurry}
			{src}
			alt="HomeBackground"
			in:fly={{ y: 1000, duration: 1000, easing: cubicOut }}
			out:fly={{ x: -1500, duration: 1200, easing: backOut }}
			on:introend={loadMenu}
		/>
	{/if}
</div>
<slot />

<style>
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		width: 100%;
		height: auto;
	}
	.blur {
		/* filter: grayscale(80%); */
		/* filter: drop-shadow(16px 16px 20px red) invert(75%); */
	}
</style>
