<script>
	import { fade, blur, fly } from 'svelte/transition';
	import { quartInOut, quartOut, cubicOut } from 'svelte/easing';
	const image_content = [
		{ src: '/landscape pic 2048x2048.jpg', id: 1 },
		{ src: '/dclassic 2021-05-19 124835.997.jpg', id: 2 }
	];
</script>

<div class="header-bg">
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
	img {
		max-width: 100%;
		display: block;
		height: auto;
		width: auto;
	}
	h1 {
		color: #f5f5f5;
		font-family: 'Raleway', sans-serif;
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
