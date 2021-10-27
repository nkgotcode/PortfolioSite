<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, backInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { menu } from '$lib/header/MenuLoad.js';
	let imgsrc = '/src/assets/landscape pic 4096x4096.jpg';
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});
	function loadMenu() {
		menu.set(true);
	}
</script>

{#if onLoad}
	<img
		src={imgsrc}
		alt="img"
		in:blur={{ amount: 5000, duration: 1000, easing: backInOut }}
		on:introend={loadMenu}
		out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
	/>
{/if}

<style>
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: 100%;
		height: 100%;
	}
</style>
