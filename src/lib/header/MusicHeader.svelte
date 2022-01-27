<script>
	import { fly } from 'svelte/transition';
	import { backOut, quartInOut } from 'svelte/easing';
	import Image from 'svelte-image';
	import { menu } from '$lib/header/MenuLoad.js';
	let src2 = '/epcover-05.webp';
	function loadMenu() {
		menu.set(true);
	}
</script>

<div>
	<div
		in:fly={{ x: -1000, duration: 500, opacity: 0, easing: quartInOut }}
		out:fly={{ x: -1000, duration: 500, opacity: 0, easing: backOut }}
		on:introend={loadMenu}
	>
		<Image src={src2} placeholder={false} />
	</div>
	<header>
		<slot />
	</header>
</div>
