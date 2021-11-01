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
		quartOut
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

<div class="header-bg">
	<img
		src={image_content[1].src}
		alt="img{image_content[1].id}"
		in:fly={{ x: 1000, duration: 1000, easing: quartInOut }}
		out:blur={{ amount: 2000, duration: 800, easing: quartOut }}
	/>
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
</style>
