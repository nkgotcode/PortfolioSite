<script>
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/env';
	import { fly, fade } from 'svelte/transition';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { url_path, sidebar_show, menu } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	import Image from 'svelte-image';
	import {
		expoOut,
		backInOut,
		backOut,
		backIn,
		quartInOut,
		cubicIn,
		expoIn,
		quartIn
	} from 'svelte/easing';
	let p = $page.path;
	let onLoad;
	onMount(() => {
		setTimeout(() => (onLoad = true), 700);
		url_path.set(p);
	});

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	// export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	// export const prerender = true;

	function loadMenu() {
		menu.set(true);
	}

	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<svelte:head>
	<title>About</title>
	<!-- for google fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if onLoad}
	<div
		class="bg"
		in:fly={{ y: 500, duration: 1000, easing: quartInOut }}
		out:fade={{ duration: 500, easing: backOut }}
	>
		{#if $menu}
			<MenuIcon on:click={handleMenuClick} />
		{/if}

		<div class="content" out:fade={{ duration: 500, easing: backOut }}>
			<h1
				in:fly={{ y: 100, duration: 1000, easing: quartInOut }}
				out:fade={{ duration: 500, easing: backOut }}
				on:introend={loadMenu}
			>
				👋 About me
			</h1>
			<p class="my-info" in:fly={{ x: 100, duration: 1000, easing: quartInOut }}>
				My name is Lê Nam Khánh. I also go by my initials, NK.
				<br />
				<br />
				I was born and grew up in Hanoi, the capital of Vietnam. In August of 2017, I moved to Chicago
				to attend the University of Illinois at Chicago. From here, I graduated with a Bachelor of Science
				in Computer Science in May 2021.
				<br />
				In my free time, I enjoy making electronic music and taking pictures around the city.
			</p>
			<br />
			<h2 in:fly={{ y: 100, duration: 1000, easing: quartInOut }}>📄 About this page</h2>
			<p class="page-info" in:fly={{ x: -100, duration: 1000, easing: quartInOut }}>
				Built with <a href="https://kit.svelte.dev">SvelteKit</a>. The page you're looking at is
				purely static HTML.
			</p>
			<!-- <Image src={'/src/assets/IMG_1662.jpg'} /> -->
		</div>
	</div>
{/if}

<style>
	.bg {
		/* position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center; */
		background-image: url('/src/assets/IMG_9037-Exposure 2.JPG');
		background-size: cover;
	}
	.content {
		width: auto;
		max-width: var(--column-width);
		color: antiquewhite;
		margin-left: 50px;
		margin-right: 50px;
		margin-top: 70px;
	}
	a {
		font-size: 4vw;
		color: #181818;
		/* font-weight: bold; */
		filter: invert(30%);
	}
	h1,
	h2,
	p {
		align-self: center;
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
	}
	p {
		font-size: 5vw;
	}
	h1 {
		font-size: 7vw;
	}
	h2 {
		font-size: 7vw;
	}
	.page-info {
		font-size: 4vw;
	}
	.plug {
		font-size: 2vw;
	}
</style>
