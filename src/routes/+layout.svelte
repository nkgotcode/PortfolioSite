<script>
	import '../app.css';
	import { onMount } from 'svelte';
	// import { url_path } from '$lib/MenuLoad.js';
	import { page } from '$app/stores';
	// import { fly, fade } from 'svelte/transition';
	// import { expoOut } from 'svelte/easing';

	let p = $page.url.pathname;
	console.log($page);

	const navItems = [
		{ label: 'HOME', href: '/' },
		{ label: 'MUSIC', href: '/music' },
		{ label: 'PHOTOGRAPHY', href: '/photography' },
		{ label: 'ABOUT', href: '/about' }
	];

	// onMount(() => {
	// 	url_path.set(p);
	// });
</script>

<svelte:head>
	<title>itsnk</title>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<nav>
	<ul>
		{#each navItems as item}
			<div>
				<li class:active={$page.url.pathname == item.href}>
					<a class="navOpts" href={item.href}>{item.label}</a>
				</li>
			</div>
		{/each}
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	@font-face {
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 200;
		src: url('/fonts/Raleway-ExtraLight.ttf') format('truetype'); /* IE9 Compat Modes */
	}
	main {
		position: absolute;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin: 0;
		box-sizing: border-box;
		/* background-color: #0f0f0f; */
		background-color: #000000;
	}
	ul {
		display: flex;
		list-style: none;
		justify-content: left;
	}
	li {
		margin-right: 2vw;
	}
	.navOpts:hover {
		font-size: 3.5vw;
		color: rgb(179, 221, 242);
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
	.active {
		color: rgb(179, 221, 242);
		text-decoration: overline;
	}
	:global(body) {
		background-color: #000000;
	}
	::-webkit-scrollbar {
		display: none;
	}
	.navOpts {
		text-decoration: none;
		transition-property: font-size, color;
		transition-duration: 0.3s;
		font-size: 4vw;
		font-weight: 800;
		align-self: center;
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
	}
</style>
