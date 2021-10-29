<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import {
		expoOut,
		backInOut,
		backOut,
		backIn,
		quartIn,
		quadIn,
		cubicIn,
		expoIn,
		quartInOut,
		quadInOut
	} from 'svelte/easing';
	import { onMount } from 'svelte';
	import { menu } from '$lib/header/MenuLoad.js';
	import Grid from 'svelte-grid-responsive';
	import EmbeddedSongs from './EmbeddedSongs.svelte';
	import { bind } from 'svelte/internal';

	let src1 = '/src/assets/IMG_2049 square.JPG';
	let src2 = '/src/assets/IMG_5566.PNG';
	let src3 = '/src/assets/IMG_9037-Exposure 2.JPG';
	let src4 = '/src/assets/IMG_1662.PNG';
	let onLoad = false;
	let y;
	onMount(() => {
		setTimeout(() => (onLoad = true), 300);
	});
	function loadMenu() {
		menu.set(true);
	}
	console.log(y);
</script>

<svelte:window bind:scrollY={y} />

{#if onLoad}
	<div>
		<img
			src={src2}
			alt="img"
			in:blur={{ amount: 20, duration: 500, easing: backIn }}
			out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
		/>
		<!-- <div class="icon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 172 172"
				style=" fill:#000000;"
				in:fly={{ y: -200, duration: 1500, easing: quartInOut }}
				out:fly={{ x: -1000, duration: 700, easing: expoOut }}
				><g
					fill="none"
					fill-rule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
					stroke-dasharray=""
					stroke-dashoffset="0"
					font-family="none"
					font-weight="none"
					font-size="none"
					text-anchor="none"
					style="mix-blend-mode: normal"
					><path d="M0,172v-172h172v172z" fill="none" /><g fill="#f5f5f5"
						><path
							d="M143.27734,34.32161c-1.51229,0.03575 -2.94918,0.66766 -3.99765,1.75807l-53.27969,53.27969l-53.27969,-53.27969c-1.07942,-1.10959 -2.56163,-1.73559 -4.10963,-1.73568c-2.33303,0.00061 -4.43307,1.41473 -5.31096,3.57628c-0.8779,2.16155 -0.3586,4.6395 1.31331,6.26669l57.33333,57.33333c2.23904,2.23811 5.86825,2.23811 8.10729,0l57.33333,-57.33333c1.70419,-1.63875 2.22781,-4.1555 1.31865,-6.33798c-0.90916,-2.18248 -3.06468,-3.58317 -5.42829,-3.52739zM143.27734,74.45495c-1.51229,0.03575 -2.94918,0.66767 -3.99765,1.75808l-53.27969,53.27969l-53.27969,-53.27969c-1.07942,-1.10959 -2.56162,-1.73559 -4.10963,-1.73568c-2.33303,0.00061 -4.43307,1.41473 -5.31097,3.57628c-0.8779,2.16155 -0.3586,4.6395 1.31331,6.26669l57.33333,57.33333c2.23904,2.23811 5.86825,2.23811 8.10729,0l57.33333,-57.33333c1.70419,-1.63875 2.22781,-4.1555 1.31865,-6.33798c-0.90916,-2.18248 -3.06468,-3.58317 -5.42829,-3.52739z"
						/></g
					></g
				></svg
			>
		</div> -->
	</div>
	<Grid container gutter={12}>
		<Grid class="grid-text" xs={12} lg={12} lgOffset={0}>
			{#if y >= 100}
				<header>
					<p
						in:fly={{ x: -1000, duration: 700, opacity: 0, easing: quartInOut }}
						out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
						style="color: #181818; font-size:80px"
					>
						Check out my latest releases below
					</p>
				</header>
			{/if}

			{#if y >= 400}
				<div
					class="bg-layer"
					in:fly={{ y: 1000, duration: 1200, opacity: 0, easing: quartInOut }}
					out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
				/>
			{/if}
		</Grid>

		<Grid container gutter={12}>
			<Grid xs={12} lg={8} lgOffset={2}>
				{#if y >= 600}
					<img
						src={src1}
						alt="img"
						in:fly={{ x: 700, duration: 1000, easing: quartInOut }}
						out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
						on:introend={loadMenu}
					/>
					<div
						class="bg-layer2"
						in:fly={{ y: 1000, duration: 1500, opacity: 0, easing: quartInOut }}
						out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
					/>
				{/if}
			</Grid>
			<Grid xs={12} lg={8} lgOffset={4} />
		</Grid>

		<Grid md={6} lg={8} mdOffset={2}>
			{#if y >= 900}
				<EmbeddedSongs />
			{/if}
		</Grid>
	</Grid>
	<slot />
{/if}

<!-- </div> -->
<style>
	p {
		/* color: #f5f5f5; */
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 150px;
		font-weight: 800;
		background-color: #f5f5f5;
		text-align: center;
		align-items: center;
		text-anchor: middle;
		filter: invert(10%);
	}
	/* svg {
		filter: sepia(5%) saturate(150%) hue-rotate(335deg) brightness(116%) contrast(92%);
		text-align: center;
	} */
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: 100%;
		height: 100%;
	}
	.bg-layer {
		background: rgb(203, 68, 68);
		width: 100%;
		height: 802%;
		opacity: 0.4;
		filter: invert(10%);
	}
	.bg-layer2 {
		background: #282828;
		width: 100%;
		height: 129%;
		opacity: 0.4;
		filter: invert(10%);
	}
	/* .icon {
		align-items: center;
		align-self: center;
		width: 50%;
	} */
</style>
