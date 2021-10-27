<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import 'carbon-components-svelte/css/all.css';

	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { expoOut, quintOut, cubicOut, expoIn, backOut } from 'svelte/easing';
	import { bind } from 'svelte/internal';
	import { tweened } from 'svelte/motion';
	import Home from './Home.svelte';
	import Header from '$lib/header/Header.svelte';
	import Photography from './Photography.svelte';
	import About from './about.svelte';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';

	let src1 = '/src/assets/@312 no text.png';
	let src2 = '/src/assets/IMG_5566.PNG';
	let onLoad = false;
	let offsetHeight;
	let scrollHeight;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
	});
	// beforeUpdate(() => {
	// 	scrollHeight = div.scrollHeight;
	// 	totalHeight = scrollHeight - innerH;
	// 	progressHeight = (offsetHeight / totalHeight) * 100;
	// 	autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
	// });

	// afterUpdate(() => {
	// 	if (autoscroll) div.scrollTo(0, div.scrollHeight);
	// });

	// window.onscroll = function () {
	// 	var pos = document.documentElement.scrollTop;
	// 	var calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 	var scroll = (pos * 100) / calc_height;
	// 	document.getElementById('progress').style.width = scroll + '%';
	// };
	// $: {
	// 	const calc_height = document.documentElement.scrollHeight - window.innerHeight;
	// 	scroll = (scrollPos * 100) / calc_height;
	// }
</script>

<!-- for google fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <section> -->
{#if onLoad}
	<HomeBackGround>
		<h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
			Hello there,
			<br />itsnk
		</h1>
	</HomeBackGround>
{/if}
<!-- </section> -->

<!-- <Home bind:onLoad /> -->
<style>
	section {
		width: 100%;
		height: 100%;
		padding: 0;
	}
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 100px;
		position: absolute;
		top: 22%;
		left: 10%;
	}
</style>
