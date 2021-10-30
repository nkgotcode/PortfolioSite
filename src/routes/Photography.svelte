<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, backInOut, quartInOut, cubicIn, quartIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { menu, url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	import Grid from 'svelte-grid-responsive';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';

	const image_content = [
		{ src: '/src/assets/landscape pic 4096x4096.jpg', id: 1 },
		{ src: 'src/assets/dclassic 2021-05-19 124835.997.jpg', id: 2 },
		{ src: 'src/assets/hoga 2021-06-01 160224.728.jpg', id: 3 },
		{ src: 'src/assets/hoga 2021-10-03 215931.550.jpg', id: 4 },
		{ src: 'src/assets/IMG_9553.jpg', id: 5 },
		{ src: 'src/assets/IMG_9554.jpg', id: 6 },
		{ src: 'src/assets/IMG_9556.PNG', id: 7 }
	];

	let y;
	// $: console.log(y);

	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
		url_path.set($page.path);
	});
	function loadMenu() {
		menu.set(true);
	}
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

<svelte:window bind:scrollY={y} />

{#if onLoad}
	<!-- {#each image_content as img} -->
	<!-- {#if y > 0} -->
	<img
		src={image_content[0].src}
		alt="img{image_content[0].id}"
		in:blur={{ amount: 3000, duration: 1000, easing: quartInOut }}
		on:introend={loadMenu}
		out:blur={{ amount: 1000, duration: 800, easing: quartInOut }}
	/>
	<!-- {/if} -->
	<!-- {#if y > 0} -->
	<div>
		<img
			src={image_content[1].src}
			alt="img{image_content[1].id}"
			in:fly={{ x: 1000, duration: 500, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
		<!-- <p>
			Taken with both film and digital cameras..
			<br />Oh yeah, my phone as well
		</p> -->
	</div>
	<!-- {/if} -->
	{#if y >= 800}
		<img
			src={image_content[2].src}
			alt="img{image_content[2].id}"
			in:fly={{ x: 1000, duration: 1000, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 1500}
		<img
			src={image_content[3].src}
			alt="img{image_content[3].id}"
			in:fly={{ x: -1000, duration: 1000, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 2800}
		<img
			src={image_content[4].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 1000, duration: 1000, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 3800}
		<img
			src={image_content[5].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: -1000, duration: 1000, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 4700}
		<img
			src={image_content[6].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 1000, duration: 1000, easing: cubicIn }}
			on:introend={loadMenu}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	<!-- {/if} -->
	<!-- {/if} -->
	<!-- {/each} -->
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
