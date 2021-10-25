<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	// import 'swiper/css';

	// import 'swiper/css/pagination';

	// import './style.css';

	// import Swiper core and required modules
	import SwiperCore, { Pagination } from 'swiper';

	import { onMount } from 'svelte';
	import 'carbon-components-svelte/css/all.css';
	import SideBar from '$lib/header/SideBar.svelte';
	import { draw, fade, fly, blur } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	// install Swiper modules
	SwiperCore.use([Pagination]);

	let sidebar_show = false;
	let visible = true;
	let onLoad = false;
	let sidebar_duration = 1000;
	let sidebar_delay = 150;

	onMount(() => {
		setTimeout(() => (onLoad = true), 50);
	});

	function overlay_click(e) {
		if ('close' in e.target.dataset) show = false;
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

<!-- <Swiper
	class="mySwiper swiper-h"
	spaceBetween={50}
	pagination={{
		clickable: true,
		type: 'progressbar',
		el: '.swiper-pagination'
	}}
>
	<SwiperSlide
		style="
		  background-image: url('/src/assets/@312 no text.png');
		  background-size: cover;
		  "
	> -->
<div>
	<div class="wrapper">
		{#if onLoad && visible && !sidebar_show}
			<svg
				class="menuBtn"
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 50 50"
				style=" fill:#f5f5f5;"
				on:click={() => (sidebar_show = !sidebar_show)}
				in:blur={{ amount: 10 }}
				out:fade
			>
				<g>
					<path
						in:draw={{ sidebar_duration, sidebar_delay, expoOut }}
						d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
					/>
				</g>
			</svg>
		{/if}
		<SideBar bind:show={sidebar_show} />
		{#if onLoad && visible}
			<h1 in:fly={{ y: 700, duration: 1500 }} out:fade>Hello there,</h1>
		{/if}
	</div>
</div>

<!-- </SwiperSlide>
	<SwiperSlide>
		<Swiper
			class="mySwiper2 swiper-v"
			direction={'vertical'}
			spaceBetween={50}
			pagination={{
				clickable: true,
				type: 'progressbar',
				el: '.swiper-pagination'
			}}
		>
			<SwiperSlide>Vertical Slide 1</SwiperSlide>
			<SwiperSlide>Vertical Slide 2</SwiperSlide>
			<SwiperSlide>Vertical Slide 3</SwiperSlide>
		</Swiper>
	</SwiperSlide>
	<SwiperSlide>Horizontal Slide 3</SwiperSlide>
	<SwiperSlide>Horizontal Slide 4</SwiperSlide>
</Swiper> -->
<style>
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 100px;
		position: absolute;
		top: 23%;
		left: 10%;
	}
	.menuBtn {
		position: absolute;
		top: 0;
		right: 0;
		padding-right: 50;
	}
	.wrapper {
		/* background: #181818;
		opacity: 0.9; */
	}
</style>
