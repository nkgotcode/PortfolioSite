<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import {
		expoOut,
		backInOut,
		quartInOut,
		cubicIn,
		quartIn,
		backIn,
		expoIn,
		quadIn,
		quartOut,
		cubicOut
	} from 'svelte/easing';
	const image_content = [
		{ src: '/src/assets/landscape pic 4096x4096.jpg', id: 1 },
		{ src: 'src/assets/dclassic 2021-05-19 124835.997.jpg', id: 2 },
		{ src: 'src/assets/hoga 2021-06-01 160224.728.jpg', id: 3 },
		{ src: 'src/assets/hoga 2021-10-03 215931.550.jpg', id: 4 },
		{ src: 'src/assets/IMG_9553.jpg', id: 5 },
		{ src: 'src/assets/IMG_9554.jpg', id: 6 },
		{ src: 'src/assets/IMG_9556.PNG', id: 7 }
	];
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

<div class="header-bg">
	<!-- <Image src={image_content[1].src} 		 /> -->
	<img
		src={image_content[1].src}
		alt="img{image_content[1].id}"
		in:fly={{ delay: 200, y: 200, duration: 500, easing: quartInOut }}
		out:blur={{ amount: 2000, duration: 800, easing: quartOut }}
	/>
	<h1
		in:fly={{ x: -500, duration: 500, easing: quartInOut }}
		out:fade={{ duration: 500, easing: cubicOut }}
	>
		Shots using Nikon digitals and my trusty iPhone. <div class="line-break">
			<br />I love the 35mm looks, though not shooting 35mm as often anymore.
		</div>
	</h1>
	<div>
		<slot />
	</div>
</div>

<style>
	/* .header-bg {
		background-image: url('src/assets/dclassic 2021-05-19 124835.997.jpg');
		background-size: auto;
	} */
	img {
		max-width: 100%;
		display: block;
		height: auto;
		width: auto;
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
