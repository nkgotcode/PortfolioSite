<script context="module">
	export const prerender = true;
</script>

<script>
	import { onMount } from 'svelte';
	import { fly, fade, blur } from 'svelte/transition';
	import { url_path } from '$lib/MenuLoad.js';
	import { page } from '$app/stores';
	import { backOut, quartInOut } from 'svelte/easing';
	let p = $page.url.pathname;
	let onLoad;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
		url_path.set(p);
	});
</script>

<svelte:head>
	<title>About itsnk</title>
	<!-- <link rel="icon" href="/favicon.png" /> -->
	<meta charset="UTF-8" />
	<meta name="description" content="About itsnk" />
</svelte:head>

{#if onLoad}
	<div
		class="bg"
		in:blur={{ amount: 1000, duration: 300, easing: quartInOut }}
		out:fade={{ duration: 500, easing: backOut }}
	>
		<div class="content" out:fade={{ duration: 500, easing: backOut }}>
			<h1
				in:fly={{ y: 20, duration: 1000, easing: quartInOut }}
				out:fade={{ duration: 500, easing: backOut }}
			>
				👋 About me
			</h1>
			<p class="my-info" in:fly={{ x: 20, duration: 1000, easing: quartInOut }}>
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
			<h2 in:fly={{ y: 20, duration: 1000, easing: quartInOut }}>📄 About this page</h2>
			<p class="page-info" in:fly={{ x: -100, duration: 1000, easing: quartInOut }}>
				Built with <a href="https://kit.svelte.dev">SvelteKit</a>. The page you're looking at is
				purely static HTML.
			</p>
			<h3
				in:fly={{ y: 20, duration: 1000, easing: quartInOut }}
				out:fade={{ duration: 500, easing: backOut }}
			>
				📸 Instagram: <a
					href="https://instagram.com/itsnk.fyi"
					in:fly={{ x: -20, duration: 1000, easing: quartInOut }}>itsnk.fyi</a
				>
			</h3>
			<h4
				in:fly={{ y: 20, duration: 1000, easing: quartInOut }}
				out:fade={{ duration: 500, easing: backOut }}
			>
				📧 For enquiries: <a
					href="mailto:me@itsnk.fyi"
					in:fly={{ x: -20, duration: 1000, easing: quartInOut }}
				>
					me@itsnk.fyi
				</a>
			</h4>
		</div>
	</div>
{/if}

<style>
	.bg {
		background-image: url('/IMG_9037-Exposure 2.webp');
		background-size: cover;
		height: fit-content;
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
		font-display: swap;
	}
	h1,
	h2,
	h3,
	h4,
	p {
		align-self: center;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
		font-display: swap;
	}
	a,
	p {
		font-size: 4vw;
	}
	h1,
	h2,
	h3,
	h4 {
		font-size: 7vw;
	}
	.page-info {
		font-size: 4vw;
	}
</style>
