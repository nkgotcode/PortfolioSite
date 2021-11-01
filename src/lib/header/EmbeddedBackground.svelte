<script>
	import { fly } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
</script>

<div
	class="bg-layer2"
	in:fly={{ y: 1000, duration: 1500, opacity: 0, easing: quartInOut }}
	out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
>
	<slot />
</div>

<style>
	.bg-layer2 {
		background: rgb(40, 40, 40, 0.4);
		width: auto;
		height: auto;
		max-width: 100%;
	}
</style>
