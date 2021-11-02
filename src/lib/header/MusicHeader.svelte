<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import {
		expoOut,
		backInOut,
		backOut,
		backIn,
		quartIn,
		quadIn,
		cubicIn,
		expoIn,
		quartInOut,
		quadInOut
	} from 'svelte/easing';
	import Image from 'svelte-image';
	import { onMount } from 'svelte';
	import { menu } from '$lib/header/MenuLoad.js';
	let src2 = '/IMG_5566.jpg';
	function loadMenu() {
		menu.set(true);
	}
</script>

<div>
	<div
		in:fly={{ x: -1000, duration: 500, opacity: 0, easing: quartInOut }}
		out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
		on:introend={loadMenu}
	>
		<Image src={src2} />
	</div>
	<!-- <img
		src={src2}
		alt="img"
		in:fly={{ x: -1000, duration: 500, opacity: 0, easing: quartInOut }}
		out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
		on:introend={loadMenu}
	/> -->
	<header>
		<slot />
	</header>
</div>

<style>
	/* img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: 100%;
		height: 100%;
	} */
</style>
