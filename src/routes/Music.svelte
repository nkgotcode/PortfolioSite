<script>
	import { onMount } from 'svelte';
	import MusicBackground from '$lib/header/MusicBackground.svelte';
	import EmbeddedSongs from '$lib/header/EmbeddedSongs.svelte';

	let onLoad = false;
	onMount(() => {
		setTimeout(() => (onLoad = true));
	});
</script>

{#if onLoad}
	<MusicBackground>
		<div class="embedded"><EmbeddedSongs style="position: absolute;top: 20%;" /></div>
	</MusicBackground>
{/if}

<style>
	.embedded {
		position: absolute;
		width: 50%;
		max-width: 700;
		top: 20%;
		align-self: center;
	}
</style>
