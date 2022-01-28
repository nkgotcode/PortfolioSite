<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { fly, fade } from 'svelte/transition';
	import MenuIcon from '$lib/header/MenuIcon.svelte';
	import { url_path, sidebar_show, menu } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	import { backOut, quartInOut } from 'svelte/easing';
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
	export const prerender = true;

	function loadMenu() {
		menu.set(true);
	}

	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<svelte:head>
	<title>itsnk</title>
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
				I was born and grew up in Hanoi, the capital of Vietnam. I moved to Chicago to attend the University
				of Illinois, then graduated with a Bachelor of Science in Computer Science in 2021.
				<br />
				During my free time, I enjoy making electronic music, taking pictures around the city, and of
				course, coding.
			</p>
			<br />
			<h2 in:fly={{ y: 100, duration: 1000, easing: quartInOut }}>📄 About this page</h2>
			<p class="page-info" in:fly={{ x: -100, duration: 1000, easing: quartInOut }}>
				Built with <a href="https://kit.svelte.dev">SvelteKit</a>. The page you're looking at is
				purely static HTML.
			</p>
			<h3
				in:fly={{ y: 100, duration: 1000, easing: quartInOut }}
				out:fade={{ duration: 500, easing: backOut }}
				on:introend={loadMenu}
			>
				📧 For enquiries: <a
					href="mailto:me@itsnk.fyi"
					in:fly={{ x: -100, duration: 1000, easing: quartInOut }}
				>
					me@itsnk.fyi
				</a>
			</h3>
		</div>
	</div>
{/if}

<style>
	.bg {
		background-image: url('/IMG_9037-Exposure 2.webp');
		background-size: cover;
	}
	.content {
		width: auto;
		max-width: var(--column-width);
		color: #faebd7;
		margin-left: 50px;
		margin-right: 50px;
		margin-top: 70px;
	}
	a {
		font-size: 4vw;
		color: #181818;
		filter: invert(30%);
	}
	h1,
	h2,
	h3,
	p {
		align-self: center;
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
	}
	a,
	p {
		font-size: 4vw;
	}
	h1,
	h2,
	h3 {
		font-size: 7vw;
	}
	.page-info {
		font-size: 4vw;
	}
</style>
