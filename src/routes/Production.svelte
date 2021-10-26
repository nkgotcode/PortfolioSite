<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, backInOut, backOut, backIn } from 'svelte/easing';
	import { onMount } from 'svelte';

	let imgsrc = '/src/assets/IMG_2049 square.JPG';
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});
</script>

<!-- <div class="production"> -->
{#if onLoad}
	<img
		src={imgsrc}
		alt="img"
		in:blur={{ amount: 500, duration: 800, easing: backIn }}
		out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
	/>
{/if}

<!-- </div> -->
<style>
	/* .productionImg {
		background-image: ;
		background-size: contain;
		background-repeat: no-repeat;
	} */
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: 100%;
		height: 100%;
	}
</style>
