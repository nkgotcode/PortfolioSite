<script>
	import { page } from '$app/stores';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { expoOut, quintOut, cubicOut, expoIn, backOut } from 'svelte/easing';

	export let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
	});
</script>

<!-- <header class="page-header"> -->
<h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
	Hello there,
	<br />itsnk
</h1>

<!-- </header> -->
<style>
	/* header {
		display: flex;
		justify-content: space-between;
	} */
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 100px;
		position: absolute;
		top: 22%;
		left: 10%;
	}
</style>
