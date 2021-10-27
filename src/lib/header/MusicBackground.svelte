<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, backInOut, backOut, backIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { menu } from '$lib/header/MenuLoad.js';
	let src1 = '/src/assets/IMG_2049 square.JPG';
	let src2 = '/src/assets/IMG_5566.PNG';
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});
	function loadMenu() {
		menu.set(true);
	}
</script>

{#if onLoad}
	<div>
		<img
			src={src1}
			alt="img"
			in:blur={{ amount: 10, duration: 800, easing: backIn }}
			out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
			on:introend={loadMenu}
		/>
	</div>
	<div>
		<img
			src={src2}
			alt="img"
			in:blur={{ amount: 10, duration: 800, easing: backIn }}
			out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
		/>
	</div>
	<slot />
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
