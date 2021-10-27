<script>
	import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
	// import 'carbon-components-svelte/css/all.css';
	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { expoOut, quintOut, cubicOut, expoIn, backOut } from 'svelte/easing';
	import Header from '$lib/header/Header.svelte';

	export let onLoad = false;

	onMount(async () => {
		setTimeout(() => (onLoad = true), 500);
	});
</script>

{#if onLoad}
	<h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
		Hello there,
		<br />itsnk
	</h1>
{/if}

<style>
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 100px;
		position: absolute;
		top: 22%;
		left: 10%;
	}
</style>
