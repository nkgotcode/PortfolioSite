<script>
	import { onMount } from 'svelte';
	import SideBar from '$lib/header/SideBar.svelte';
	import { draw, fade, blur, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { menu, sidebar_show } from '$lib/header/MenuLoad.js';
	// export let sidebar_show;
	export let onLoad = false;
	let src = '/src/assets/@312 no text.png';
	let sidebar_duration = 1000;
	let sidebar_delay = 100;

	onMount(() => {
		setTimeout(() => (onLoad = true));
	});

	function handleMenuClick() {
		sidebar_show.set(true);
	}
</script>

<div>
	<div>
		{#if $menu && $sidebar_show == false}
			<svg
				class="menuBtn"
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 50 50"
				style=" fill:#f5f5f5;"
				on:click={handleMenuClick}
				in:fly={{ x: 700, duration: 300, easing: expoOut }}
				out:fly={{ x: -700, duration: 800, easing: expoOut }}
			>
				<g>
					<path
						in:draw={{ sidebar_duration, sidebar_delay, expoOut }}
						d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
					/>
				</g>
			</svg>
		{/if}
	</div>
	<SideBar />
	<div>
		<slot />
	</div>
</div>

<style>
	.menuBtn {
		position: fixed;
		top: 0;
		right: 0;
		padding-right: 50;
	}
</style>
