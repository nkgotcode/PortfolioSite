<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Grid from 'svelte-grid-responsive';
	import EmbeddedSongs from './EmbeddedSongs.svelte';
	import MusicHeader from './MusicHeader.svelte';
	import { menu } from './MenuLoad';
	import EmbeddedBackground from './EmbeddedBackground.svelte';
	let src1 = '/IMG_2049 square.webp';
	let onLoad = false;
	let y;
	onMount(() => {
		setTimeout(() => (onLoad = true), 500);
	});
	function loadMenu() {
		menu.set(true);
	}
	$: console.log(y);
</script>

<svelte:window bind:scrollY={y} />

{#if onLoad}
	<MusicHeader />
	{#if y <= 0}
		<svg
			width="150px"
			height="150px"
			viewBox="0 0 24 24"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#f5f5f5"
			stroke-width="2"
			stroke-linecap="square"
			stroke-linejoin="miter"
			fill="none"
			color="#000000"
			in:fly={{ y: 2000, duration: 1000, opacity: 0, easing: quartInOut }}
			out:fade={{ duration: 500, easing: backOut }}
		>
			<title id="chevronDownIconTitle">Chevron Down</title> <polyline points="6 10 12 16 18 10" />
		</svg>
	{/if}
	<Grid container gutter={12}>
		<Grid class="grid-text" xs={12} lg={12} lgOffset={0}>
			{#if y > 0}
				<p
					in:fly={{ x: -1000, duration: 700, opacity: 0, easing: quartInOut }}
					out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
					on:introend={loadMenu}
					style="color: #181818; font-size:10vw"
				>
					Check out my latest releases below
				</p>
				<!-- {/if} -->

				<!-- {#if y >= 1} -->
				<!-- {#if y >= 200} -->
				<div
					class="bg-layer"
					in:fly={{ y: 200, duration: 1000, opacity: 0, easing: quartInOut }}
					out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
				>
					<!-- <Image src={src1} /> -->
					<img
						src={src1}
						alt="img"
						in:fly={{ x: 700, duration: 1000, easing: quartInOut }}
						out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
					/>
				</div>
			{/if}
		</Grid>

		<Grid md={8} lg={10} lgOffset={1} mdOffset={2}>
			{#if y >= 100}
				<div class="embedded-bg">
					<EmbeddedBackground>
						<EmbeddedSongs />
					</EmbeddedBackground>
				</div>
			{/if}
		</Grid>
	</Grid>
	<slot />
{/if}

<style>
	svg {
		align-self: center;
	}
	p {
		font-family: 'Zen Kurenaido', sans-serif;
		font-weight: 800;
		background-color: #f5f5f5;
		text-align: center;
		align-items: center;
		text-anchor: middle;
		filter: invert(10%);
	}
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: 100%;
		height: 100%;
	}
	.bg-layer {
		background: rgb(203, 68, 68, 0.4);
		width: auto;
		max-width: 100%;
		height: auto;
		/* opacity: 0.4; */
		filter: invert(5%);
	}
	.embedded-bg {
		background: rgb(203, 68, 68, 0.4);
		width: auto;
		max-width: 100%;
		height: auto;
		/* filter: invert(7%); */
	}
</style>
