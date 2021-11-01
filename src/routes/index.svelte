<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	// import 'carbon-components-svelte/css/all.css';

	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { expoOut, quintOut, cubicOut, expoIn, backOut } from 'svelte/easing';
	import { bind } from 'svelte/internal';
	import { tweened } from 'svelte/motion';
	import Photography from './Photography.svelte';
	import About from './about.svelte';
	import HomeBackGround from '$lib/header/HomeBackground.svelte';
	import { page } from '$app/stores';
	import { url_path, sidebar_show } from '$lib/header/MenuLoad.js';
	import MenuIcon from '$lib/header/MenuIcon.svelte';

	let src1 = '/src/assets/@312 no text.png';
	let src2 = '/src/assets/IMG_5566.PNG';
	let onLoad = false;
	let offsetHeight;
	let scrollHeight;
	let p = $page.path;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
		url_path.set(p);
	});

	function handleMenuClick() {
		sidebar_show.set(true);
	}
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
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if onLoad}
	<HomeBackGround>
		<MenuIcon on:click={handleMenuClick} />
		<!-- <div>

		</div> -->
		<!-- <h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
			Hello there,
			<br />itsnk
		</h1> -->
	</HomeBackGround>
{/if}

<style>
	/* h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 150px;
		position: absolute;
		top: 22%;
		left: 10%;
	} */
</style>
