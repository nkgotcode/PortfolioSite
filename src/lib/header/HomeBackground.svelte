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
	import { menu } from '$lib/header/MenuLoad.js';

	let src = '/src/assets/@312 no text.png';
	let onLoad = false;
	let load_menu = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});
	// in:fade={{ duration: 700, easing: cubicOut }}

	function loadMenu() {
		menu.update((n) => true);
	}
</script>

<div>
	{#if onLoad}
		<img
			class="img1"
			{src}
			alt="HomeBackground"
			in:fly={{ y: 1000, duration: 1000, easing: expoInOut }}
			out:fly={{ x: -1500, duration: 1500, easing: backOut }}
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
	}
	.img1 {
		width: 100%;
		height: auto;
	}
	.img2 {
		width: auto;
		height: auto;
	}
</style>
