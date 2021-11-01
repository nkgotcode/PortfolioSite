<script>
	import { draw, fade, blur, fly, crossfade } from 'svelte/transition';
	import {
		expoOut,
		backInOut,
		quartInOut,
		cubicIn,
		quartIn,
		backIn,
		expoIn,
		quadIn,
		cubicOut,
		quintOut,
		quartOut
	} from 'svelte/easing';
	import { onMount, onDestroy } from 'svelte';
	import { menu, url_path, sidebar_show } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	import Grid from 'svelte-grid-responsive';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import PhotographyHeader from '$lib/header/PhotographyHeader.svelte';

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
	let p = $page.path;
	$: console.log(y);
	let header;
	let scrollPos;
	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true), 200);
		url_path.set(p);
	});
	function loadMenu() {
		menu.set(true);
	}
	function handleMenuClick() {
		sidebar_show.set(true);
	}

	const [send, receive] = crossfade({
		duration: 1000,
		easing: quartInOut
	});
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
	<!-- <div in:blur={{ amount: 3000, duration: 1000, easing: quartInOut, out:fade  }} /> -->
	<MenuIcon on:click={handleMenuClick} />
	{#if y <= 0}
		<div
			in:blur={{ delay: 250, amount: 1000, duration: 1000, easing: quartInOut }}
			out:fade={{ duration: 500, easing: quartOut }}
		>
			<img
				src={image_content[0].src}
				alt="img{image_content[0].id}"
				in:send
				out:receive
				on:introend={loadMenu}
			/>
		</div>
	{/if}
	<div in:send out:receive>
		{#if y > 0}
			<PhotographyHeader>
				<h1
					in:fly={{ x: -500, duration: 1500, easing: quartInOut }}
					out:fade={{ duration: 500, easing: cubicOut }}
				>
					Shots using Nikon digitals and my trusty iPhone. <div class="line-break">
						<br />I love the 35mm looks, though I don't shoot it as often anymore.
					</div>
				</h1>
			</PhotographyHeader>
		{/if}
	</div>
	<!-- {/if} -->
	{#if y >= 800}
		<img
			src={image_content[2].src}
			alt="img{image_content[2].id}"
			in:fly={{ x: 1000, duration: 1000, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 1500}
		<img
			src={image_content[3].src}
			alt="img{image_content[3].id}"
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 2800}
		<img
			src={image_content[4].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 3500}
		<img
			src={image_content[5].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 4700}
		<img
			src={image_content[6].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
{/if}

<style>
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: auto;
		display: block;
		height: auto;
		max-width: 100%;
	}
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 10vw;
		text-align: left justify;
		width: auto;
		max-width: 100%;
		height: auto;
		display: block;
		padding-left: 30px;
		padding-right: 30px;
	}
	.line-break {
		text-align: right;
	}
</style>
