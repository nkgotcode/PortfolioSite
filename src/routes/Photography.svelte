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
	import Image from 'svelte-image';

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
	<!-- <div in:blur={{ amount: 3000, duration: 1000, easing: quartInOut, out:fade={{ duration: 500, easing: quartOut }}  }} /> -->
	<MenuIcon on:click={handleMenuClick} />
	{#if y <= 0}
		<div
			class="landing"
			in:blur={{ delay: 50, amount: 1000, duration: 1000, easing: quartInOut }}
			out:fly={{ x: -1500, duration: 700, easing: quartOut, opacity: 0.2 }}
		>
			<img
				src={image_content[0].src}
				alt="img{image_content[0].id}"
				in:send
				out:receive
				on:introend={loadMenu}
			/>
			<!-- <Image src={image_content[0].src} /> -->
			<!-- <div class="img-bg" /> -->
		</div>

		<div
			in:fly={{ y: 1000, duration: 1000, easing: quartInOut, opacity: 0.2 }}
			out:fly={{ y: -2000, duration: 700, easing: quartOut, opacity: 0.2 }}
		>
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 315 315"
				xml:space="preserve"
			>
				<g>
					<g>
						<g>
							<path
								d="M157.5,0C93.319,0,41.103,52.215,41.103,116.397c0,62.138,106.113,190.466,110.63,195.898
				c1.425,1.713,3.538,2.705,5.767,2.705c2.228,0,4.342-0.991,5.767-2.705c4.518-5.433,110.63-133.76,110.63-195.898
				C273.897,52.215,221.682,0,157.5,0z M157.5,295.598c-9.409-11.749-28.958-36.781-48.303-65.397
				c-34.734-51.379-53.094-90.732-53.094-113.804C56.103,60.486,101.59,15,157.5,15c55.91,0,101.397,45.486,101.397,101.397
				c0,23.071-18.359,62.424-53.094,113.804C186.457,258.817,166.909,283.849,157.5,295.598z"
							/>
							<path
								d="M195.657,213.956c-3.432-2.319-8.095-1.415-10.413,2.017c-10.121,14.982-21.459,30.684-33.699,46.67
				c-2.518,3.289-1.894,7.996,1.395,10.514c1.36,1.042,2.963,1.546,4.554,1.546c2.254,0,4.484-1.013,5.96-2.941
				c12.42-16.22,23.933-32.165,34.219-47.392C199.992,220.938,199.09,216.275,195.657,213.956z"
							/>
							<path
								d="M157.5,57.5C123.589,57.5,96,85.089,96,119s27.589,61.5,61.5,61.5S219,152.911,219,119S191.411,57.5,157.5,57.5z
				 M157.5,165.5c-25.64,0-46.5-20.86-46.5-46.5s20.86-46.5,46.5-46.5c25.641,0,46.5,20.86,46.5,46.5S183.141,165.5,157.5,165.5z"
							/>
						</g>
					</g>
				</g>
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
				<g />
			</svg>
			<p>Chicago, IL</p>
		</div>
	{/if}
	<div in:send out:receive>
		{#if y > 0}
			<PhotographyHeader />
		{/if}
	</div>
	{#if y >= 300}
		<!-- <div
			in:fly={{ x: 1000, duration: 1000, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		>
			<Image src={image_content[2].src} quality={70} />
		</div> -->
		<img
			src={image_content[2].src}
			alt="img{image_content[2].id}"
			in:fly={{ x: 1000, duration: 1000, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
		<!-- {/if} -->
		<!-- {#if y >= 300} -->
		<!-- <div
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		>
			<Image src={image_content[3].src} quality={70} />
		</div> -->
		<img
			src={image_content[3].src}
			alt="img{image_content[3].id}"
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 600}
		<!-- <div
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		>
			<Image src={image_content[4].src} quality={70} />
		</div> -->
		<img
			src={image_content[4].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 1000}
		<!-- <div
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		>
			<Image src={image_content[5].src} quality={70} />
		</div> -->
		<img
			src={image_content[5].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: -700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
	{#if y >= 1400}
		<!-- <div
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		>
			<Image src={image_content[6].src} quality={70} />
		</div> -->
		<img
			src={image_content[6].src}
			alt="img{image_content[4].id}"
			in:fly={{ x: 700, duration: 1500, easing: quartInOut }}
			out:blur={{ amount: 2000, duration: 800, easing: backInOut }}
		/>
	{/if}
{/if}

<style>
	svg {
		fill: #f5f5f5;
		width: 60px;
		height: 60px;
		display: block;
		margin: auto;
		margin-top: 30px;
	}
	img {
		-webkit-user-drag: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		width: auto;
		display: block;
		height: auto;
		max-width: 100%;
	}
	p {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 7vw;
		text-align: center;
	}
</style>
