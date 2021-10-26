<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import 'carbon-components-svelte/css/all.css';

	import { draw, fade, fly, blur, slide } from 'svelte/transition';
	import { expoOut, quintOut, cubicOut, expoIn, backOut } from 'svelte/easing';
	import { bind } from 'svelte/internal';
	import { tweened } from 'svelte/motion';
	let visible = false;
	let onLoad = false;
	let progress = tweened(0, {
		duration: 400,
		easing: expoOut
	});
	let src = '/src/assets/@312 no text.png';

	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
	});

	if (onLoad) {
		setTimeout(() => (visible = true), 500);
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
</svelte:head>

{#if onLoad}
	<h1 in:fly={{ y: -1000, duration: 1500 }} out:fly={{ y: 1000, duration: 300 }}>
		Hello there,
		<br />itsnk
	</h1>

	<!-- {#if !visible}
		{(visible = true)}
	{/if} -->
	<img
		{src}
		in:fade={{ duration: 500, easing: cubicOut }}
		out:fly={{ x: -1000, duration: 500, easing: backOut }}
		alt="img"
	/>
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
	/* #progress {
		display: block;
		background-color: #f5f5f5;
		height: 20px;
		/* width: 100%; 
		width: var(--width);
		position: fixed;
		top: 0;
		left: 0;
	} */
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		width: 100%;
		height: 100%;
	}
	#progress {
		position: fixed;
		top: 0;
		left: 0;
		width: 20px;
		height: 100%;
		/* background: #f5f5f5; */
	}
	#progressBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 20px;
		height: var(--progressHeight);
		background: #0f0f0f;
	}
</style>
