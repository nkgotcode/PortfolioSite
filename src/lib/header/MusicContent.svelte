<script>
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut, quartInOut } from 'svelte/easing';
</script>

<header>
	<h1
		in:fly={{ y: -1000, duration: 700, easing: expoOut }}
		out:fly={{ y: -1000, duration: 700, easing: expoOut }}
	>
		Check out my latest releases below
	</h1>
</header>

<style>
	h1 {
		color: #f5f5f5;
		font-family: 'Zen Kurenaido', sans-serif;
		font-size: 150px;
		font-weight: 800;
	}
</style>
