<script>
	import { fly, fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { menu, sidebar_show, url_path } from '$lib/header/MenuLoad.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let tmp = $page.path;
	$: console.log(tmp);
	$: console.log($url_path);

	onMount(() => {
		url_path.set(tmp);
	});

	const navItems = [
		{ label: 'HOME', href: '/' },
		{ label: 'MUSIC', href: '/Music' },
		{ label: 'PHOTOGRAPHY', href: '/Photography' },
		{ label: 'ABOUT', href: '/about' }
	];

	function hideMenu() {
		if ($url_path === tmp) {
			hideSideBar();
		} else {
			menu.set(false);
			sidebar_show.set(false);
		}
	}
	function hideSideBar() {
		sidebar_show.set(false);
	}
</script>

{#if $sidebar_show}
	<nav transition:fade={{ delay: 50, duration: 300, easing: expoOut }}>
		<div>
			<svg
				class="closeBtn"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="50"
				height="50"
				viewBox="0 0 50 50"
				style=" fill:#f5f5f5;"
				on:click={hideSideBar}
				in:fly={{ x: 500, duration: 300, easing: expoOut }}
				out:fly={{ x: -500, duration: 250, easing: expoOut }}
			>
				<g>
					<path
						d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
					/>
				</g>
			</svg>
		</div>

		{#each navItems as item}
			<div>
				<a class="navOpts" href={item.href} on:click={hideMenu}>{item.label}</a>
			</div>
		{/each}
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		padding: 2rem 1rem 0.6rem;
		border-left: 1px solid #aaa;
		background: #fff;
		overflow-y: auto;
		width: 15rem;
		background: #181818;
		opacity: 0.86;
		filter: invert(5%);
	}
	div {
		align-self: center;
		padding-bottom: 4em;
	}
	.closeBtn {
		position: absolute;
		top: 0;
		right: 0;
	}
	.navOpts {
		font-size: 1.8rem;
		font-weight: 800;
		padding-top: 1em;
		padding-bottom: 1rem;
		align-self: center;
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
	}
</style>
